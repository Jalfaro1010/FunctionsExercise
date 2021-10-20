// Function Exercise

// 1
function spookyGhost(){
    console.log(`Boo!!!`);
  }
  spookyGhost(); // Displays Boo!!!
  
  // 2
  function candy(goal){
    console.log(goal);
    console.log(goal);
    console.log(goal);
    console.log(goal);
    // OR
    // console.log(goal, goal, goal, goal);
  }
  candy(`Get Candy`);

  // 3
  function werewolf(a, b){
    if (a === `Full` && b === `Moon`){
      console.log(`ARH-WOOO!`);
    }
  }
  werewolf(`Full`, `Moon`); // Displays ARH-WOOO!
 
   // 4
  function halloween(){
    return `October 31st`;
  }
  halloween(); // Does noT display anything
  console.log(halloween()); // Displays October 31st
  
  // 5
  function isEnoughCandy(pieces){
    if (pieces >= 31){
      return true;
    } else {
      return false;
    }
  }
  console.log(isEnoughCandy(31)); // Displays True
  console.log(isEnoughCandy(5)); // Displays False
  
  // 6
  function candyCounter(nums){
    let total = 0;
    for(i = 0; i < nums.length; i++){
      total += nums[i];
    }
    return total;
  
  }
  console.log(candyCounter([1, 2, 3])); // Displays 6
  console.log(candyCounter([1, 3])); // Displays 4
  
  // 7
  const hauntedMansion = function(){
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
  }
  hauntedMansion(); // Displays Welcome, foolish mortals, to the Haunted Mansion!
  
  // 8
  ghostbusters = () => `Who You Gonna Call?`;
  
  console.log(ghostbusters()); // Displays Who You Gonna Call?
  
  // 9
  // No
  
  // 10
  // Yes
  
  // 11 A
  const costumes = ["Ghost", "Princess", "Pirate"];
  
  // 11 B
  const upperCostumes = costumes.map(i => i.toUpperCase());
  
  console.log(upperCostumes); // Displays 'GHOST', 'PRINCESS', 'PIRATE' 