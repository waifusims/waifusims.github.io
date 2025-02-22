// Constants
const MAX_CLASSTREE_HEIGHT = 7;
const MAX_CLASSTREE_WIDTH = 8;

const SKILLBOX_WIDTH = 300;
const SKILLBOX_HEIGHT = 60;
const SKILLBOX_PADDING = {x:85, y:15};

const CLASSTREE_WIDTH = 4 * SKILLBOX_WIDTH + 3 * SKILLBOX_PADDING.x + 5;
const CLASSTREE_HEIGHT =  7 * SKILLBOX_HEIGHT + 6 * SKILLBOX_PADDING.y + 5;

// HTML elements
var levelDropdown;
var raceDropdown;
var classDropdown;
var specializationDropdown;

var remainingPointsLabel;
var maxPointsLabel;

var treeDiv;

var tooltip;

// Character properties
var level;
var race;
var className;
var specName;
var retirementBonus;

// Skill points
var remainingPoints;
var maxPoints;

// Working data sets
var activeClassSkills;
var activeClassSkillLevels;
var activeClassSkillForwards;
var activeRaceSkills;
var activeTree = 0; // which tree are we looking at? (0 for class, 1 for race)

function init()
{
	window.addEventListener("resize", onResize);

	levelDropdown = document.getElementById("levelDropdown");
	raceDropdown = document.getElementById("raceDropdown");
	classDropdown = document.getElementById("classDropdown");
	specializationDropdown = document.getElementById("specializationDropdown");

	remainingPointsLabel = document.getElementById("remainingPointsLabel");
	maxPointsLabel = document.getElementById("maxPointsLabel");

	treeDiv = document.getElementById("skillTree");
	treeDiv.style.width = CLASSTREE_WIDTH + "px";
	treeDiv.style.height = CLASSTREE_HEIGHT + "px";

	document.body.style.minWidth = CLASSTREE_WIDTH + "px";

	tooltip = document.getElementById("tooltip");

	populateLevelDropdown();
	
	specName = specializationDropdown.value;
	className = classDropdown.value;
	level = +levelDropdown.value;
	race = raceDropdown.value;	
	retirementBonus = +retirementDropdown.value;
	
	calculateSkillPoints();
	remainingPoints = maxPoints;
	updatePointsLabels();

	// grab data for the race skills
	activeRaceSkills = raceSkills[race];

	// grab data for the class skills
	activeClassSkills = classSkills[className];
	activeClassSkillLevels = classSkillLevels[className];
	activeClassSkillForwards = classSkillForwardReqs[className][specName];

	showClassSkillTree();
}

function populateLevelDropdown()
{
	for(var i = 1; i <= 99; i++)
	{
		var option = document.createElement("option");
		option.innerHTML = i;
		option.value = i;
		levelDropdown.appendChild(option);
	}
}

function changeLevel()
{
	// store old level for comparison to new level
	var oldLevel = level;	

	// update to new level
	level = +(levelDropdown.value);

	// if level drops below 20, reset specialization if we had one
	if(level < 20 && specializationDropdown.selectedIndex > 0)
	{
		specializationDropdown.selectedIndex = 0;
		changeSpecialization();
	}

	// count the number of points we used
	var pointsUsed = maxPoints - remainingPoints;
	
	// if we are lowering our level, we need to reset skill points if we placed more than we should have	
	if(level < oldLevel)
	{
		// calculate max points for our new level
		calculateSkillPoints();

		// if we used more points than the new level has available, reset skill points
		if(pointsUsed > maxPoints)
		{
			resetSkillPoints();
		}
		else
		{
			remainingPoints = maxPoints - pointsUsed;			

			// loop through all race skills and remove points from those that we are too low level to have learned
			Object.keys(activeRaceSkills).forEach(function(skill)
			{
				if(activeRaceSkills[skill].reqLevel > level && activeRaceSkills[skill].level > 0)
				{					
					remainingPoints = Math.min(maxPoints, remainingPoints + activeRaceSkills[skill].level);

					activeRaceSkills[skill].level = 0;
				}

				if(activeTree == 1 && activeRaceSkills[skill].max > 0)
				{
					var levelBoxes = document.getElementById(skill + "Levels").children;
					for(var i = 0; i < levelBoxes.length; i++)
					{
						levelBoxes[i].className = "levelBox";
					}
				}
			});

			updatePointsLabels();
		}
	}
	else
	{
		// our level is higher than (or equal to) the level we were previously at, just add more skill points
		calculateSkillPoints();
		remainingPoints = maxPoints - pointsUsed;
		updatePointsLabels();
	}

	// redraw the skill tree to account for skills we may now meet the level prereq for
	redrawCurrentSkillTree();
}

function changeRetirement()
{
	var oldRetirementBonus = retirementBonus;
	retirementBonus = +(retirementDropdown.value);

	// count the number of points we used
	var pointsUsed = maxPoints - remainingPoints;	

	// calculate max skill points for new retirement bracket
	calculateSkillPoints();

	// if we are lowering our level, we need to reset skill points if we placed more than we should have
	if(oldRetirementBonus > retirementBonus)
	{	
		// if we used more points than are now available, reset skill points
		if(pointsUsed > maxPoints)
		{
			resetSkillPoints();
			remainingPoints = maxPoints;
			updatePointsLabels();
			return;
		}
	}

	remainingPoints = maxPoints - pointsUsed;
	updatePointsLabels();
}

function changeRace()
{
	var oldRace = race;
	race = raceDropdown.value;

	if(oldRace != race)
	{
		// we selected another race, take back race skill points and draw new tree
		resetRaceSkillPoints();

		// set new set of race skills
		activeRaceSkills = raceSkills[race];

		// draw race skill tree
		showRaceSkillTree();
	}
}

function changeClass()
{
	var oldClass = className;
	className = classDropdown.value;

	if(oldClass != className)
	{
		// we selected another class, take back skill points and draw new skill tree
		resetClassSkillPoints();		

		// set new set of class skills
		activeClassSkills = classSkills[className];
		activeClassSkillLevels = classSkillLevels[className];
		activeClassSkillForwards = classSkillForwardReqs[className][specName];

		// draw class skill tree
		showClassSkillTree();		
	}
}

function changeSpecialization()
{
	// track previous specialization, get new one
	var oldSpec = specName;
	specName = specializationDropdown.value;	
	
	if(oldSpec != "base")
	{
		// if we had a specialization, remove skill points assigned to previous specialization )
		resetSpecializationSkillPoints();
	}

	// grab new set of class skills
	activeClassSkills = classSkills[className];
	activeClassSkillLevels = classSkillLevels[className];
	activeClassSkillForwards = classSkillForwardReqs[className][specName];

	// if we've actually selected a specialization, we need to be at least level 20
	if(specName != "base")
	{
		// if below level 20 and selecting a specialization, upgrade to level 20
		if(level < 20)
		{	
			// raise level to 20 (changelevel will update skill point display)
			levelDropdown.selectedIndex = 19;
		}
	}

	changeLevel();	

	// draw class skill tree
	showClassSkillTree();	
}

// sets max skill points to appropriate value for current level/retirement
function calculateSkillPoints()
{
	var points = 2 + level + retirementBonus;

	if(specName !== "base")
		points += 5;

	maxPoints = points;	

	// constrain spendable points to the maximum available
	remainingPoints = Math.min(maxPoints, remainingPoints);
}

function resetClassSkillPoints()
{	
	if(activeClassSkills != undefined)
	{
		Object.keys(activeClassSkillForwards).forEach(function(skill)
		{
			remainingPoints = Math.min(maxPoints, remainingPoints + activeClassSkills[skill].level);

			activeClassSkills[skill].level = 0;

			// if we're looking at the class skill tree, redraw the level boxes for the skills as we remove points
			if(activeTree == 0)
			{	
				var levelBoxes = document.getElementById(skill + "Levels").children;
				for(var i = 0; i < levelBoxes.length; i++)
				{
					levelBoxes[i].className = "levelBox";
				}
			}			
		});
	}

	// check levels of skills to make sure prerequisites are met
	Object.keys(activeClassSkillForwards).forEach(function(skillName)
	{
		updateReqs(skillName);
	});
	
	updatePointsLabels();
}

function resetSpecializationSkillPoints()
{
	if(activeClassSkills != undefined)
	{
		// only loop through skills available with the current specialization (and base)
		Object.keys(activeClassSkillForwards).forEach(function(skill)
		{
			// only reset specialization skill levels
			if(activeClassSkills[skill].reqLevel != 0)
			{
				// add points back into remaining pool
				remainingPoints = Math.min(maxPoints, remainingPoints + activeClassSkills[skill].level);

				// remove points from skill
				activeClassSkills[skill].level = 0;

				// if we're looking at the class skill tree, redraw the level boxes for the skills as we remove points
				if(activeTree == 0)
				{	
					var levelBoxes = document.getElementById(skill + "Levels").children;
					for(var i = 0; i < levelBoxes.length; i++)
					{
						levelBoxes[i].className = "levelBox";
					}
				}	
			}
		});
	}
}

function resetRaceSkillPoints()
{
	if(activeRaceSkills != undefined)
	{
		Object.keys(activeRaceSkills).forEach(function(skill)
		{
			remainingPoints = Math.min(maxPoints, remainingPoints + activeRaceSkills[skill].level);

			activeRaceSkills[skill].level = 0;

			if(activeTree == 1 && activeRaceSkills[skill].max > 0)
			{
				var levelBoxes = document.getElementById(skill + "Levels").children;
				for(var i = 0; i < levelBoxes.length; i++)
				{
					levelBoxes[i].className = "levelBox";
				}
			}
		});
	}

	updatePointsLabels();	
}

function resetSkillPoints()
{
	resetClassSkillPoints();
	resetRaceSkillPoints();
}

function updatePointsLabels()
{
	remainingPointsLabel.innerHTML = remainingPoints;
	maxPointsLabel.innerHTML = maxPoints;
}

function canLearn(skillName)
{
	if(activeClassSkills[skillName])
	{
		if(activeClassSkills[skillName].reqLevel > level)
		{
			return false;
		}

		var deps = Object.keys(activeClassSkills[skillName].dep);

		for(var i = 0; i < deps.length; i++)
		{
			if(!(activeClassSkills[deps[i]].level >= activeClassSkills[skillName].dep[deps[i]]))
			{
				return false;
			}
		}
	}
	else if(activeRaceSkills[skillName])
	{
		return !(activeRaceSkills[skillName].reqLevel > level);
	}
	else
	{
		return false;
	}	

	return true;
}

function updateReqs(skillName)
{
	// check whether or not we have enough points in this skill to satsify prerequisites of later skills

	// if we do not have enough levels, revoke points from later skills and mark them as inactive (we cannot learn them)
	var forwards = Object.keys(activeClassSkillForwards[skillName]);

	if(forwards.length == 0)
		return;

	forwards.forEach(function(forwardSkill)
	{
		var skillDiv = document.getElementById(forwardSkill);

		if(skillDiv != undefined)
		{
			if(!canLearn(forwardSkill))
			{
				// we don't have enough points to have this skill learned, reclaim any points in it and mark it inactive
				remainingPoints += activeClassSkills[forwardSkill].level;
				activeClassSkills[forwardSkill].level = 0;

				var levelBoxes = document.getElementById(forwardSkill + "Levels").children;
				for(var i = 0; i < levelBoxes.length; i++)
				{
					levelBoxes[i].className = "levelBox";
				}

				skillDiv.className = "inactive";
			}
			else
			{
				// we have enough points to have this skill learned, mark it as active
				skillDiv.className = "skillBox";
			}

			// check skills that require this forward skill
			updateReqs(forwardSkill);
		}
	});

	// if we have enough levels, leave them be
}

function addPoint(skillName)
{
	if(remainingPoints == 0)
		return;

	if(activeClassSkills[skillName])
	{
		if(activeClassSkills[skillName].level == activeClassSkills[skillName].max)
				return;

		activeClassSkills[skillName].level++;

		// update level boxes
		var levelBoxes = document.getElementById(skillName + "Levels").children;
		for(var i = 0; i < levelBoxes.length; i++)
		{
			if(i < activeClassSkills[skillName].level)
			{
				levelBoxes[i].className = "activeLevelBox";
			}
			else
			{
				levelBoxes[i].className = "levelBox";
			}
		}

		// update to see if we unlocked any other skills
		updateReqs(skillName);
	}
	else if(activeRaceSkills[skillName])
	{
		if(activeRaceSkills[skillName].level == activeRaceSkills[skillName].max)
				return;

		activeRaceSkills[skillName].level++;

		// update level boxes
		var levelBoxes = document.getElementById(skillName + "Levels").children;
		for(var i = 0; i < levelBoxes.length; i++)
		{
			if(i < activeRaceSkills[skillName].level)
			{
				levelBoxes[i].className = "activeLevelBox";
			}
			else
			{
				levelBoxes[i].className = "levelBox";
			}
		}
	}
	else
	{
		return;
	}	

	// subtract used skill point
	remainingPoints--;	

	// update tooltip text to highlight the info for the new level
	updateTooltipText(skillName);

	// update display of # of points we have left
	updatePointsLabels();
}

function subtractPoint(skillName)
{
	if(activeClassSkills[skillName])
	{
		if(activeClassSkills[skillName].level == 0)
			return;

		activeClassSkills[skillName].level--;

		var levelBoxes = document.getElementById(skillName + "Levels").children;
		for(var i = 0; i < levelBoxes.length; i++)
		{
			if(i < activeClassSkills[skillName].level)
			{
				levelBoxes[i].className = "activeLevelBox";
			}
			else
			{
				levelBoxes[i].className = "levelBox";
			}
		}		

		updateReqs(skillName);
	}
	else if(activeRaceSkills[skillName])
	{
		if(activeRaceSkills[skillName].level == 0)
			return;

		activeRaceSkills[skillName].level--;

		var levelBoxes = document.getElementById(skillName + "Levels").children;
		for(var i = 0; i < levelBoxes.length; i++)
		{
			if(i < activeRaceSkills[skillName].level)
			{
				levelBoxes[i].className = "activeLevelBox";
			}
			else
			{
				levelBoxes[i].className = "levelBox";
			}
		}
	}	
	else
	{
		return;
	}

	remainingPoints++;
	updateTooltipText(skillName);
	updatePointsLabels();
}

function selectTree(e)
{
	var clicked = e.target || e.srcElement;
	
	if(clicked === raceTreeButton)
	{
		showRaceSkillTree();
	}
	else if(clicked == classTreeButton)
	{
		showClassSkillTree();
	}
}

function showClassSkillTree()
{
	// we are looking at the class skill tree
	activeTree = 0;

	// clear tree canvas
	while (treeDiv.firstChild) 
	{
    	treeDiv.removeChild(treeDiv.firstChild);
	}

	raceTreeButton.className = "";
	classTreeButton.className = "selected";	

	// create and place node divs for each skill in the active tree

	Object.keys(activeClassSkillForwards).forEach(function(skillName)
	{		
		var currentSkill = activeClassSkills[skillName];
		var currentForwards = activeClassSkillForwards[skillName];

		// draw prereq lines that connect this skill to others

		// draw lines to forwards
		if(Object.keys(currentForwards).length > 0)
		{
			var startx = (currentSkill.coords.x) * (SKILLBOX_WIDTH + SKILLBOX_PADDING.x) + SKILLBOX_WIDTH;
			var starty = (currentSkill.coords.y * (SKILLBOX_HEIGHT + SKILLBOX_PADDING.y)) + SKILLBOX_HEIGHT/2;
			

			// if the skills are farther than one column apart draw a longer line, else a normal one
			if(activeClassSkills[Object.keys(currentForwards)[0]].coords.x - currentSkill.coords.x > 1)
			{
				drawHorizontalLine(startx, starty, ( activeClassSkills[Object.keys(currentForwards)[0]].coords.x - currentSkill.coords.x - 1)* (SKILLBOX_PADDING.x + SKILLBOX_WIDTH) + SKILLBOX_PADDING.x/2);
			}
			else
			{
				drawHorizontalLine(startx, starty, SKILLBOX_PADDING.x/2);
			}

			// if there was more than one forward draw a line connecting them
			if(Object.keys(currentForwards).length > 1)
			{
				var ox = (currentSkill.coords.x + 1) * (SKILLBOX_WIDTH + SKILLBOX_PADDING.x) - SKILLBOX_PADDING.x/2
				var oy = classSkills[className][Object.keys(currentForwards)[0]].coords.y * (SKILLBOX_HEIGHT + SKILLBOX_PADDING.y) + SKILLBOX_HEIGHT/2;

				drawVerticalLine(ox, oy, (Object.keys(currentForwards).length - 1) * (SKILLBOX_HEIGHT + SKILLBOX_PADDING.y));
			}

			// draw required level on line
			var levelReq = document.createElement("div");
			levelReq.innerHTML = "Lv" + currentForwards[Object.keys(currentForwards)[0]];
			levelReq.className = "levelReq";
			levelReq.style.left = treeDiv.getBoundingClientRect().left + window.scrollX + startx + SKILLBOX_PADDING.x/4 - 15 + "px";
			levelReq.style.top = treeDiv.getBoundingClientRect().top + window.scrollY + starty - 10 + "px";
			treeDiv.appendChild(levelReq);
		}

		// draw lines back to prereqs
		var prereqNames = Object.keys(currentSkill.dep);

		if(prereqNames.length > 0)
		{
			drawHorizontalLine((currentSkill.coords.x) * (SKILLBOX_WIDTH + SKILLBOX_PADDING.x) - SKILLBOX_PADDING.x/2, (currentSkill.coords.y * (SKILLBOX_HEIGHT + SKILLBOX_PADDING.y)) + SKILLBOX_HEIGHT/2, SKILLBOX_PADDING.x/2);
			
			// if there were multiple prereqs draw a connecting line
			if(prereqNames.length > 1)
			{
				var starty = classSkills[className][prereqNames[0]].coords.y * (SKILLBOX_HEIGHT + SKILLBOX_PADDING.y) + SKILLBOX_HEIGHT/2;

				drawVerticalLine((currentSkill.coords.x) * (SKILLBOX_WIDTH + SKILLBOX_PADDING.x) - SKILLBOX_PADDING.x/2, starty, (prereqNames.length - 1) * (SKILLBOX_HEIGHT + SKILLBOX_PADDING.y));
			}			
		}		

		// create skillbox
		var skillDiv = document.createElement("div");
		skillDiv.innerHTML = "<strong>" + currentSkill.name_en + "</strong>&ensp;(" + currentSkill.name_jp + ")";
		skillDiv.className =  canLearn(skillName) ? "skillBox" : "inactive";
		skillDiv.id = skillName;
		skillDiv.style.width = SKILLBOX_WIDTH + "px";
		skillDiv.style.height = SKILLBOX_HEIGHT + "px";
		skillDiv.style.left = treeDiv.getBoundingClientRect().left + window.scrollX + (+currentSkill.coords.x) * (SKILLBOX_WIDTH + SKILLBOX_PADDING.x) + "px";
		skillDiv.style.top = treeDiv.getBoundingClientRect().top + window.scrollY + (+currentSkill.coords.y) * (SKILLBOX_HEIGHT + SKILLBOX_PADDING.y) + "px"; 

		// add event handler
		skillDiv.onmouseenter = function(e){onSkillMouseEnter(skillName, e);};
		skillDiv.onmouseleave = function(e){onSkillMouseLeave(skillName, e);};
		skillDiv.onclick = function(e){onSkillClick(skillName, e);};
		skillDiv.oncontextmenu = function(e){onSkillRightClick(skillName, e); return false;};

		// add level indicator
		var levelBoxContainer = document.createElement("div");
		levelBoxContainer.className = "levelBoxContainer";
		levelBoxContainer.id = skillName + "Levels";

		for(var i = 0; i < activeClassSkills[skillName].max; i++)
		{
			var levelBox = document.createElement("div");
			levelBox.className = activeClassSkills[skillName].level > i ? "activeLevelBox" : "levelBox";
			levelBoxContainer.appendChild(levelBox);
		}	

		skillDiv.appendChild(levelBoxContainer);

		// draw skillbox
		treeDiv.appendChild(skillDiv);
	});
}

function showRaceSkillTree()
{
	// we are looking at the race skill tree
	activeTree = 1;

	// clear tree canvas
	while (treeDiv.firstChild) 
	{
    	treeDiv.removeChild(treeDiv.firstChild);
	}

	raceTreeButton.className = "selected";
	classTreeButton.className = "";	

	// create and place node divs for each skill
	Object.keys(activeRaceSkills).forEach(function(skillName)
	{
		var currentSkill = activeRaceSkills[skillName];

		// create skillbox
		var skillDiv = document.createElement("div");

		skillDiv.innerHTML = "<strong>" + currentSkill.name_en + "</strong>&ensp;(" + currentSkill.name_jp + ")";

		if(canLearn(skillName))
		{
			if(currentSkill.active)
			{
				skillDiv.className = "unionSkillBox";
			}
			else
			{
				skillDiv.className = "skillBox";
			}
		}
		else
		{
			skillDiv.className = "inactive";
		}

		skillDiv.id = skillName;
		skillDiv.style.width = SKILLBOX_WIDTH + "px";
		skillDiv.style.height = SKILLBOX_HEIGHT + "px";
		skillDiv.style.left = treeDiv.getBoundingClientRect().left + (+currentSkill.coords.x) * (SKILLBOX_WIDTH + SKILLBOX_PADDING.x) + "px";
		skillDiv.style.top = treeDiv.getBoundingClientRect().top +  window.scrollY + (+currentSkill.coords.y) * (SKILLBOX_HEIGHT + SKILLBOX_PADDING.y) + "px";

		// add event handler
		skillDiv.onmouseenter = function(e){onSkillMouseEnter(skillName, e);};
		skillDiv.onmouseleave = function(e){onSkillMouseLeave(skillName, e);};
		skillDiv.onclick = function(e){onSkillClick(skillName, e);};
		skillDiv.oncontextmenu = function(e){onSkillRightClick(skillName, e); return false;};

		// add level indicator
		if(currentSkill.max > 0)
		{
			var levelBoxContainer = document.createElement("div");
			levelBoxContainer.className = "levelBoxContainer";
			levelBoxContainer.id = skillName + "Levels";

			var levelBox = document.createElement("div");
			levelBox.className = activeRaceSkills[skillName].level > 0 ? "activeLevelBox" : "levelBox";
			levelBoxContainer.appendChild(levelBox);

			skillDiv.appendChild(levelBoxContainer);
		}

		// draw skillbox
		treeDiv.appendChild(skillDiv);
	});
}

function drawVerticalLine(x, y, length)
{
	var line = document.createElement("div");
	line.className = "line";
	line.style.width = "4px";
	line.style.height = length + 4 + "px"; 
	line.style.left = treeDiv.getBoundingClientRect().left + window.scrollX + x + "px";
	line.style.top = treeDiv.getBoundingClientRect().top + window.scrollY + y + "px";
	treeDiv.appendChild(line);
}

function drawHorizontalLine(x, y, length)
{
	var line = document.createElement("div");
	line.className = "line";
	line.style.width = length + 4 + "px";
	line.style.height = "4px";
	line.style.left = treeDiv.getBoundingClientRect().left + window.scrollX + x + "px";
	line.style.top = treeDiv.getBoundingClientRect().top + window.scrollY + y + "px";
	treeDiv.appendChild(line);
}

function updateTooltipText(skillName)
{
	var skill = undefined;

	// check if class or race skill
	if(activeClassSkills[skillName])
	{	
		skill = activeClassSkills[skillName];

		// add skill name
		tooltip.innerHTML = "<strong>" + skill.name_en;

		// add passive/active indicator
		tooltip.innerHTML += ":&ensp;" + (skill.active ? "Active" : "Passive");

		// add icons for body parts the skill uses (if any)
		if(skill.bodyParts != null)
		{
			for(var i = 0; i < skill.bodyParts.length; i++)
			{
				tooltip.innerHTML += "&ensp;";
				tooltip.innerHTML += getIcon(skill.bodyParts[i]);
			}
		}

		// divider
		tooltip.innerHTML += "<br>- - -<br>";

		// add skill description
		tooltip.innerHTML += "<p>" + skill.details + "</p><br>";
		
		// add per-level details
		if(!activeClassSkillLevels[skillName])
			return;

		Object.keys(activeClassSkillLevels[skillName]).forEach(function(level)
		{		
			if(level == activeClassSkills[skillName].level)
			{
				tooltip.innerHTML += "<br><strong><span>Lv" + level + ": " + activeClassSkillLevels[skillName][level] + "</span></strong>";
			}
			else
			{
				tooltip.innerHTML += "<br><span>Lv" + level + ": " + activeClassSkillLevels[skillName][level] + "</span>";
			}
		});
	}
	else if(activeRaceSkills[skillName])
	{
		skill = activeRaceSkills[skillName];

		tooltip.innerHTML = "";

		// add required level if the skill can't yet be learned
		if(!canLearn(skillName))
		{
			tooltip.innerHTML += "<strong>Required Level: " + skill.reqLevel +"<br><br>";
		}

		// add skill name
		tooltip.innerHTML += "<strong>" + skill.name_en;

		// add passive/union skill indicator
		tooltip.innerHTML += ":&ensp;" + (skill.active ? "Union Skill" : "Passive") + "<br>- - -<br>";

		// add skill description
		tooltip.innerHTML += "<p>" + skill.details + "</p><br>";
	}	
}

// event handlers
function onSkillMouseEnter(skillName, e)
{
	var source = e.target || e.srcElement;

	// update tooltip text
	updateTooltipText(skillName);

	// show tooltip
	tooltip.className = "tooltip";

	// set tooltip position
	var x = source.getBoundingClientRect().left + window.scrollX + SKILLBOX_WIDTH/3;
	var y = source.getBoundingClientRect().top + window.scrollY + SKILLBOX_HEIGHT + SKILLBOX_PADDING.y/3;

	tooltip.style.left = x + "px";
	tooltip.style.top = y + "px";	

	// constrain tooltip to visible window
	var roomx = tooltip.getBoundingClientRect().left + tooltip.getBoundingClientRect().width - (window.innerWidth - 20);
	var roomy = tooltip.getBoundingClientRect().top + tooltip.getBoundingClientRect().height - (window.innerHeight - 20);

	if(roomx > 0)
	{
		x -= roomx;
		tooltip.style.left = x + "px";
	}

	if(roomy > 0)
	{
		y -= roomy;
		tooltip.style.top = y + "px";
	}	
}

function onSkillMouseLeave(skillName, e)
{
	var source = e.target || e.srcElement;

	// hide tooltip
	tooltip.className = "hidden";
}

function onSkillClick(skillName, e)
{
	var source = e.target || e.srcElement;

	if(canLearn(skillName))
	{
		addPoint(skillName);
	}
}

function onSkillRightClick(skillName, e)
{
	var source = e.target || e.srcElement;

	if(canLearn(skillName))
	{
		subtractPoint(skillName);
	}
}

function redrawCurrentSkillTree()
{
	// redraw the skill tree we were looking at
	if(activeTree == 0)
	{
		showClassSkillTree();
	}
	else if(activeTree == 1)
	{
		showRaceSkillTree();
	}
}

function getIcon(name)
{
	var iconHtml = "<img src=\"img/"

	switch(name)
	{
		case "HEAD":
			iconHtml += "head.png";
			break;
		case "ARMS":
			iconHtml += "arm.png";
			break;
		case "LEGS":
			iconHtml += "leg.png";
			break;
		case "FIRE":
			iconHtml += "fire.png";
			break;
		case "ICE":
			iconHtml += "ice.png";
			break;
		case "VOLT":
			iconHtml += "volt.png";
			break;
		case "STAB":
			iconHtml += "";
			break;
		case "CUT":
			iconHtml += "";
			break;
		case "BASH":
			iconHtml += "";
			break;
		default:
			iconHtml += "";
			break;
	}

	iconHtml += "\"/>";

	return iconHtml;
}

function onResize()
{
	redrawCurrentSkillTree();
}