/**
 * Modelisation Class of the user section
 * @constructor
 * @param {number} id - id of the user
 * @param {string} userInfos - firstname, name of the user
 * @param {number} todayScore - user's Score about the day
 * @param {number} keyData - energy values of the user
 */

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
