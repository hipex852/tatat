const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 40,
    height: 40,
    speed: 5,
    color: 'blue'
};

let bullets = [];
let enemies = [];
let score = 0;
let lastEnemyTime = 0;
const enemySpawnInterval = 1000; // Milissegundos
