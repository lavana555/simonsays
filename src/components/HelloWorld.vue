<template>
  <div>
    <div class="hello">
      <div>
        <h1>Simon Says</h1>
      </div>
      <h2>{{ message }}</h2>
      <div class="title">

        <h2 id="level" class="level">Уровень: {{ level }}</h2>

      </div>
      <div class="gameboard">
        <div id="celeste" class="color celeste left" data-color="светлосиний"
             :class="{'flashing':isFetchingGameboard}"
             v-on:click="EnterElements"
        >
          <div class="borde borde-celeste"></div>
        </div>
        <div id="violeta" class="color violeta right" data-color="violeta"
             :class="{'flashing':isFetchingVioleta}"
             v-on:click="EnterElements"
        >
          <div class="borde borde-violeta"></div>
        </div>
        <div id="naranja" class="color naranja left" data-color="апельсин"
             v-on:click="EnterElements"
        >
          <div class="borde borde-naranja"></div>
        </div>
        <div id="verde" class="color verde right" data-color="verde"
             :class="{'flashing':isFetchingVerde}" v-on:click="EnterElements"

        >
          <div
              class="borde borde-verde"

          ></div>
        </div>

      </div>

    </div>
    <button class="btn" @click="getStarted">GET STARTED</button>
    <!--    <button class="btn" @click="getElements">GET ELEMENTS</button>-->
    <button class="btn" @click="secondRound" v-if="message==='win'">SECOUND ROUND</button>
    <button class="btn" @click="tryAgain" v-if="message==='wrong'">TRY AGAIN</button>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isactive: false,
      flashing: false,
      isFetchingVerde: false,
      isFetchingGameboard: false,
      isFetchingVioleta: false,
      isFetchingNaranja: false,
      selectedElement: [],
      levels: [
        {level: 0, selectedElements: ['verde']},
        {level: 1, selectedElements: ['verde', 'celeste']},
        {level: 2, selectedElements: ['verde', 'celeste', 'verde']},
        {level: 3, selectedElements: ['violeta', 'celeste', 'verde', 'violeta']}
      ],
      level: 0,
      message: ''
    }
  },
  methods: {
    flash(event) {
      // eslint-disable-next-line no-debugger
//  debugger
      //console.log(event)
      //console.log(event.target.tagName)
      alert(event.srcElement.id)
//  alert('yo')
      // eslint-disable-next-line no-debugger
      //debugger
      this.flashing = true
      setTimeout(() => {
        // eslint-disable-next-line no-debugger

        this.flashing = false
      }, 100)
    },
    EnterElements(event) {
      // alert(event.srcElement.id)
      let element = event.srcElement.id
      this.selectedElement.push(element)
      setTimeout(() => {
        this.message = (JSON.stringify(this.levels[this.level].selectedElements) == JSON.stringify(this.selectedElement) ? 'win' : 'wrong')
      }, 2000)
      // console.log(this.selectedElement)
    },
    getStarted() {
      let level = this.level
      // this.isFetchingVerde=true
      // setTimeout(()=>{
      //   // eslint-disable-next-line no-debugger
      //
      //   this.isFetchingVerde=false
      // },500)

      switch (level) {
        case 0: {
          this.isFetchingVerde = true
          setTimeout(() => {
            // eslint-disable-next-line no-debugger

            this.isFetchingVerde = false
          }, 500)
          break
        }
        case 1: {
          this.isFetchingVerde = true
          setTimeout(() => {
            // eslint-disable-next-line no-debugger
            this.isFetchingGameboard = true
            setTimeout(() => {
              // eslint-disable-next-line no-debugger

              this.isFetchingGameboard = false
            }, 1000)
            this.isFetchingVerde = false
          }, 500)

          break
        }
        case 2: {
          this.isFetchingVerde = true
          setTimeout(() => {
            // eslint-disable-next-line no-debugger
            this.isFetchingGameboard = true
            setTimeout(() => {
              // eslint-disable-next-line no-debugger
              this.isFetchingVerde = true
              setTimeout(() => {
                this.isFetchingVerde = false
              }, 1500)
              this.isFetchingGameboard = false
            }, 1000)
            this.isFetchingVerde = false
          }, 500)

          break
        }
        case 3: {
          this.isFetchingVioleta = true
          setTimeout(() => {
            // eslint-disable-next-line no-debugger
            this.isFetchingGameboard = true
            setTimeout(() => {
              // eslint-disable-next-line no-debugger
              this.isFetchingVerde = true
              setTimeout(() => {
                this.isFetchingVioleta = true
                setTimeout(() => {
                  this.isFetchingVioleta = false
                }, 2000)
                this.isFetchingVerde = false
              }, 1500)
              this.isFetchingGameboard = false
            }, 1000)
            this.isFetchingVioleta = false
          }, 500)

          break
        }
          // case 2: {
          //   this.isFetchingVerde = true
          //   setTimeout(() => {
          //     // eslint-disable-next-line no-debugger
          //
          //     this.isFetchingVerde = false
          //   }, 100)
          //   this.isFetchingGameboard = true
          //   setTimeout(() => {
          //     // eslint-disable-next-line no-debugger
          //
          //     this.isFetchingGameboard = false
          //   }, 300)
          //   this.isFetchingVerde = true
          //   setTimeout(() => {
          //     // eslint-disable-next-line no-debugger
          //
          //     this.isFetchingVerde = false
          //   }, 1000)
          //   break
          // }
        default:
          alert('error')
      }


    },
    getElements() {
      alert(this.selectedElement)
    },
    secondRound() {
      this.level += 1
      this.message = ''
      this.selectedElement = []
    },
    tryAgain() {
      this.message = ''
      this.selectedElement = []
    }
//


//   started(){
//   return new Promise((res,rej)=>setTimeout(res,rej))
//   }
//    started(00)
// .then(()=>{
//
// })
  },
  // computed() {
  //   this.flashing=true
  //   setTimeout(()=>{
  //
  //     this.flashing=false
  //   },5000)
  // }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  margin-top: 50px;
}

body {
  margin: 0;
  background: #dedede;
  display: flex;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
}

.title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.source-code {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.level, .score, .top-score {
  padding: 10px;
}

.gameboard {
  height: 100vh;
  width: 100vh;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  max-height: 60vh;
  max-width: 60vh;
}

.color {
  cursor: pointer;
  width: 50%;
  height: 50%;
  display: inline-block;
  transition: .5s;
}

.borde {
  pointer-events: none;
  width: 100%;
  height: calc(100% - 4px);
}

.left {
  float: left;
}

.right {
  float: left;
}

.celeste {
  background: #22a6b3;
}

.borde-celeste {
  border-bottom: 4px solid #197c85;
}

.celeste.light {
  background: #7ed6df;
}

.celeste.light .borde-celeste {
  border-bottom: 4px solid #54a7b1;
}

.violeta {
  background: #be2edd;
}

.borde-violeta {
  border-bottom: 4px solid #7e1c94;
}

.violeta.light {
  background: #e056fd;
}

.violeta.light .borde-violeta {
  border-bottom: 4px solid #ad35c5;
}

.naranja {
  background: #f0932b;
}

.borde-naranja {
  border-radius: 0px 0px 0px 100%;
  border-bottom: 4px solid #bb721f;
  border-left: 4px solid #bb721f;
}

.naranja.light {
  background: #ffbe76;
}

.naranja.light .borde-naranja {
  border-bottom: 4px solid #e69c48;
  border-left: 4px solid #e69c48;
}

.verde {
  background: #6ab04c;
}

.verde.active {
  background: #e0d7e2;
}

.borde-verde {
  width: calc(100% - 4px);
  border-radius: 0px 0px 100% 0px;
  border-bottom: 4px solid #4a7e34;
  border-right: 4px solid #4a7e34;
}

.verde.light {
  background: #badc58;
}

.verde.light .borde-verde {
  border-bottom: 4px solid #8aa539;
  border-right: 4px solid #8aa539;
}

.verde.right.active {
  border-bottom: 4px solid #a5394f;
  border-right: 4px solid #a53946;
}

.flashing {
  background-color: #f5ebef;
  transition: none;
  opacity: 0.1;
  transition-duration: 2s;
}

@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
    display: block;
  }
  to {
    display: none;
    opacity: 0;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    display: block;
  }
  to {
    display: none;
    opacity: 0;
  }
}

@-webkit-keyframes fadeIn {
  from {
    display: none;
    opacity: 0;
  }
  to {
    opacity: 1;
    display: block;
  }
}

@keyframes fadeIn {
  from {
    display: none;
    opacity: 0;
  }
  to {
    opacity: 1;
    display: block;
  }
}

.btn-start {
  transition: display 2s;
  -webkit-transition: display 2s;
  transition: visibility 1s;
  -webkit-transition: visibility 1s;
  cursor: pointer;
  width: 420px;
  height: 100px;
  background: #ecf0f1;
  color: #2c3e50;
  border: none;
  border-bottom: 4px solid #c4c6c7;
  border-radius: 8px;
  font-size: 3em;
  position: absolute;
  top: calc(50% + 50px);
  left: calc(50% - 210px);
  transition: .5s;
  outline: none;
}

.btn-start:hover {
  color: #ecf0f1;
  background: #2c3e50;
  border-bottom: 4px solid #1f3346;
}

.btn-start:active {
  transform: scale(0.95);
}

.animation {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.hide {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
  visibility: hidden;
}

.show {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  visibility: visible;
}
</style>
