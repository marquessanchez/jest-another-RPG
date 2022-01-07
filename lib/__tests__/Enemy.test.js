const Enemy = require('../Enemy.js');
const Potion = require('../Potion.js');

//jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
  const enemy = new Enemy('goblin', 'sword');

  expect(enemy.name).toBe('goblin');
  expect(enemy.weapon).toBe('sword');
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});


test("gets enemy's health value", () => {
  const enemy = new Enemy('Dave');

  expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test("gets enemy's stats as an object", () => {
  const enemy = new Enemy('Dave');

  expect(enemy.getStats()).toHaveProperty('potions');
  expect(enemy.getStats()).toHaveProperty('health');
  expect(enemy.getStats()).toHaveProperty('strength');
  expect(enemy.getStats()).toHaveProperty('agility');
});

test('creates a enemy object', () => {
  const enemy = new Enemy('Dave');

  expect(enemy.name).toBe('Dave');
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

test ('gets inventory from enemy or returns false', () => {
  const enemy = new Enemy('Dave');

  expect(enemy.getInventory()).toEqual(expect.any(Array));
  
  enemy.inventory = [];

  expect(enemy.getInventory()).toEqual(false);
});

test('checks if a enemy is alive or not', () => {
  const enemy = new Enemy('Dave');
  
  expect(enemy.isAlive()).toBeTruthy();

  enemy.health = 0;

  expect(enemy.isAlive()).toBeFalsy();
});

test("subtracts from enemy's health", () => {
  const enemy = new Enemy('Dave');
  const oldHealth = enemy.health;

  enemy.reduceHealth(5);

  expect(enemy.health).toBe(oldHealth - 5);

  enemy.reduceHealth(99999);

  expect(enemy.health).toBe(0);
});

test('gets a description of the enemy', () => {
  const enemy = new Enemy('goblin', 'sword');

  expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
  expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
});


