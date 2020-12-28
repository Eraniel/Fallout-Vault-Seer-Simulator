const eventList = [
  {
    //img: "img/1.jpg",
    img: "img/merchant.jpg",
    textfield:
      "A new merchant from Wastelands comes today to your Vault and wants to sell his goods. Would you allow him?",
    effectOnDecline: { Armory: 0, Trust: +10, Food: -10, Health: 0 },
    effectOnApprove: { Armory: 0, Trust: -10, Food: +10, Health: 0 }
  },
  {
    img: "img/raidersjoin.jpg",
    textfield: "Raiders want to join your vault. Would you allow them?",
    effectOnDecline: { Armory: -10, Trust: +10, Food: +5, Health: 0 },
    effectOnApprove: { Armory: +10, Trust: -10, Food: 0, Health: 0 }
  },
  {
    img: "img/supermutants.jpg",
    textfield: "Supermutants knock your vault-door. Would you open?",
    effectOnDecline: { Armory: -5, Trust: +10, Food: 0, Health: -5 },
    effectOnApprove: { Armory: +10, Trust: -10, Food: +5, Health: -5 }
  },
  {
    img: "img/littlegirl.jpg",
    textfield:
      "Strange little girl begs you to help her mommy. Would you help her?",
    effectOnDecline: { Armory: +0, Trust: -5, Food: +10, Health: -5 },
    effectOnApprove: { Armory: 0, Trust: +5, Food: -10, Health: +5 }
  },
  {
    img: "img/radrat.jpg",
    textfield:
      "Rad-rats attack your vault. Would you give more weapons to people for defence?",
    effectOnDecline: { Armory: +5, Trust: -5, Food: +5, Health: -10 },
    effectOnApprove: { Armory: -10, Trust: +5, Food: +5, Health: +0 }
  },
  {
    img: "img/radscorp.jpg",
    textfield:
      "People killed some rad-scorpions and want to eat their meat. Would you allow them?",
    effectOnDecline: { Armory: 0, Trust: -5, Food: +0, Health: 0 },
    effectOnApprove: { Armory: 0, Trust: +5, Food: +5, Health: -10 }
  },
  {
    img: "img/scientist.jpg",
    textfield:
      "Some scientists want to try new anti-virus serum on people. What do you say?",
    effectOnDecline: { Armory: 0, Trust: +5, Food: +0, Health: 0 },
    effectOnApprove: { Armory: 0, Trust: -5, Food: +0, Health: +10 }
  },
  {
    img: "img/scouts.jpg",
    textfield:
      "Some scouts returned from Wastelands, but seems they are sick. Let them in?",
    effectOnDecline: { Armory: +5, Trust: -10, Food: +5, Health: 0 },
    effectOnApprove: { Armory: +5, Trust: +5, Food: +5, Health: -10 }
  }
];

export default eventList;
