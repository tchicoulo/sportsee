class User {
  constructor(id, userInfos, todayScore, keyData) {
    this.id = id;
    this.firstName = userInfos.firstName;
    this.lastName = userInfos.lastName;
    this.age = userInfos.age;
    this.todayScore = todayScore;
    this.calorieCount = keyData.calorieCount;
    this.proteinCount = keyData.proteinCount;
    this.carbohydrateCount = keyData.carbohydrateCount;
    this.lipidCount = keyData.lipidCount;
  }
}

export default User;
