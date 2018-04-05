<template>
  <div id="app" class="container">
    <app-header
            :score="score"
            @scoreChanged="score = $event"
    ></app-header>

    <app-new-game
            :matrix="matrix"
            @matrixChanged="matrix = $event"
            ref="newGame"
            :score="score"
            @scoreChanged="score = $event"
    ></app-new-game>

    <app-game-board
            :matrix="matrix"
            @matrixChanged="matrix = $event"
            :direction="direction"
    ></app-game-board>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import NewGame from './components/NewGame.vue';
import GameBoard from './components/GameBoard.vue';

export default {
  name: 'App',
  data: function () {
      return {
          matrix: [
              [0,0,0,0],
              [0,0,0,0],
              [0,0,0,0],
              [0,0,0,0],
          ],
          row: '',
          column: '',
          score: 0,
          winner: 0,
          direction: ''
      }
  },
  computed: {

  },
  methods: {

    addNewCell(event) {

        switch (event.key) {
            case "ArrowUp":
                this.arrowUpCase();
                this.direction = event.key;
                //there is a bug/ its seems like the matrix is changed to full after one more key press
                break;
            case "ArrowDown":
                this.arrowDownCase();
                this.direction = event.key;
                break;
            case "ArrowRight":
                this.arrowRightCase();
                this.direction = event.key;
                break;
            case "ArrowLeft":
                this.arrowLeftCase();
                this.direction = event.key;
                break;
            default:
                return;
        }

        if (this.winner) {
            this.checkWin();
        } else {
            this.checkLose();
        }
    },
    newCellNeeded() {
        let intermediarMatrix = this.buildIntermediarMatrix();

        this.getRandomPairData();
        while(intermediarMatrix[this.row][this.column] !== 0 && this.fullMatrix() !== true) {
            this.getRandomPairData();
        }

        intermediarMatrix[this.row][this.column] = this.getRandomTwoOrFour();
        this.$nextTick(function () {
            this.matrix = intermediarMatrix;
        });
    },
    getRandomPairData() {
        this.row = Math.ceil(Math.random()*4) -1;
        this.column = Math.ceil(Math.random()*4) -1;
    },
    getRandomTwoOrFour() {
        var value = Math.random() < 0.9 ? 2 : 4;
        return value;
    },
    fullMatrix() {
        var state = true;
        dance:
        for (var i=0; i<4; i++) {
            for (var j=0; j< 4; j++) {
                if (this.matrix[i][j] === 0) {
                    state = false;
                    break dance;
                }
            }
        }
        return state;
    },
    //returns true if there is at least a move, else false
    canMakeMoves() {
        var state = false;
        dance:
            for (var i=0; i<this.matrix.length; i++) {
                for (var j=0; j< this.matrix.length; j++) {
                    //search above
                    if ((i-1) >= 0) {
                        if(this.matrix[i][j] === this.matrix[i-1][j]) {
                            state = true;
                            break dance;
                        }
                    }

                    //search under
                    if ((i+1) <4 ) {
                        if(this.matrix[i][j] === this.matrix[i+1][j]) {
                            state = true;
                            break dance;
                        }
                    }

                    //search right
                    if ((j+1) <4 ) {
                        if(this.matrix[i][j] === this.matrix[i][j+1]) {
                            state = true;
                            break dance;
                        }
                    }

                    //search left
                    if ((j-1) >= 0) {
                        if(this.matrix[i][j] === this.matrix[i][j-1]) {
                            state = true;
                            break dance;
                        }
                    }
                }
            }
        return state;
    },
    checkWin() {

          dance:
          for (var i = 0; i < this.matrix.length; i++) {
              for (var j = 0; j < this.matrix.length; j++) {
                  if (this.matrix[i][j] === 2048) {
                      swal("Congrats! You won!", "You can celebrate or Continue!");
                      this.winner = 1;
                      break dance;
                  }
              }
          }

    },
    checkLose() {
        if (this.fullMatrix() && !this.canMakeMoves()) {
            swal("The numbers won the battle!", "Give it another try, starting a new game!")
        }
    },
    buildIntermediarMatrix() {
        let intermediarMatrix = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        for (var i = 0; i < intermediarMatrix.length; i++) {
            for (var j = 0; j < intermediarMatrix.length; j++) {
                intermediarMatrix[i][j] = this.matrix[i][j];
            }
        }

        return intermediarMatrix;
    },
    calculateScore(number) {
        this.score += number;
    },
    arrowUpCase() {
        var mirror =  [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        var intermediarMatrix = this.buildIntermediarMatrix();
        var ok;
        var m;
        var i;
        var j;

        for( j=0;j<4;j++) {
            for (i = 1; i < 4; i++) {
                if (intermediarMatrix[i][j] !== 0) {
                    m = i - 1;

                    while (m >= 0 && intermediarMatrix[m][j] === 0) {
                        intermediarMatrix[m][j] = intermediarMatrix[m + 1][j];
                        intermediarMatrix[m + 1][j] = 0;
                        m--;
                        ok = 1;
                    }
                    if (m >= 0 && intermediarMatrix[m][j] === intermediarMatrix[m + 1][j] && mirror[m][j] !== 1) {
                        intermediarMatrix[m][j] = intermediarMatrix[m][j] + intermediarMatrix[m + 1][j];
                        intermediarMatrix[m + 1][j] = 0;
                        mirror[m][j] = 1;
                        ok = 1;
                        this.calculateScore(intermediarMatrix[m][j]);
                    }
                }
            }
        }

        this.matrix = intermediarMatrix;

        if(ok === 1) {
            this.newCellNeeded();
        }

    },
    arrowDownCase() {
        var mirror =  [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        var intermediarMatrix = this.buildIntermediarMatrix();
        var ok;
        var m;
        var i;
        var j;

        for(j=0;j<4;j++) {
            for (i = 2; i >= 0; i--) {
                if (intermediarMatrix[i][j] !== 0) {

                    m = i + 1;
                    while (m <= 3 && intermediarMatrix[m][j] === 0) {
                        intermediarMatrix[m][j] = intermediarMatrix[m-1][j];
                        intermediarMatrix[m-1][j] = 0;
                        m++;
                        ok = 1;
                    }
                    if (m  <= 3 && intermediarMatrix[m][j] === intermediarMatrix[m-1][j] && mirror[m][j] !== 1) {
                        intermediarMatrix[m][j] = intermediarMatrix[m][j] + intermediarMatrix[m-1][j];
                        intermediarMatrix[m-1][j] = 0;
                        mirror[m][j] = 1;
                        ok = 1;
                        this.calculateScore(intermediarMatrix[m][j]);
                    }
                }
            }
        }

        this.matrix = intermediarMatrix;

        if(ok === 1) {
            this.newCellNeeded();
        }
    },
    arrowRightCase() {
        var mirror =  [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        var intermediarMatrix = this.buildIntermediarMatrix();
        var ok;
        var m;
        var i;
        var j;

        for(i=0;i<4;i++) {
            for (j = 2; j >= 0; j--) {
                if (intermediarMatrix[i][j] !== 0) {
                    m = j + 1;
                    while (m <= 3 && intermediarMatrix[i][m] === 0) {
                        intermediarMatrix[i][m] = intermediarMatrix[i][m-1];
                        intermediarMatrix[i][m - 1] = 0;
                        m++;
                        ok = 1;
                    }
                    if (m <= 3 && intermediarMatrix[i][m] === intermediarMatrix[i][m-1] && mirror[i][m] !== 1) {
                        intermediarMatrix[i][m] = intermediarMatrix[i][m] + intermediarMatrix[i][m - 1];
                        intermediarMatrix[i][m - 1] = 0;
                        mirror[i][m] = 1;
                        ok = 1;
                        this.calculateScore(intermediarMatrix[i][m]);
                    }
                }
            }
        }

        this.matrix = intermediarMatrix;

        if(ok === 1) {
            this.newCellNeeded();
        }
    },
    arrowLeftCase() {
        var mirror =  [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        var intermediarMatrix = this.buildIntermediarMatrix();
        var ok;
        var m;
        var i;
        var j;

        for(i=0;i<4;i++) {
            for (j = 1; j <= 3; j++) {
                if (intermediarMatrix[i][j] !== 0) {
                    m = j - 1;
                    while (m >= 0 && intermediarMatrix[i][m] === 0) {
                        intermediarMatrix[i][m] = intermediarMatrix[i][m + 1];
                        intermediarMatrix[i][m + 1] = 0;
                        m--;
                        ok = 1;
                    }
                    if (m >= 0 && intermediarMatrix[i][m] === intermediarMatrix[i][m + 1] && mirror[i][m] !== 1) {
                        intermediarMatrix[i][m] = intermediarMatrix[i][m] + intermediarMatrix[i][m + 1];
                        intermediarMatrix[i][m + 1] = 0;
                        mirror[i][m] = 1;
                        ok = 1;
                        this.calculateScore(intermediarMatrix[i][m]);
                    }
                }
            }
        }

        this.matrix = intermediarMatrix;

        if(ok === 1) {
            this.newCellNeeded();
        }

    }
  },
  components: {
      appHeader: Header,
      appNewGame: NewGame,
      appGameBoard: GameBoard
  },
  mounted() {
      this.$refs.newGame.newMatrix();
  },
  created: function () {
      window.addEventListener('keyup', this.addNewCell);
  },
}
</script>

<style>

</style>
