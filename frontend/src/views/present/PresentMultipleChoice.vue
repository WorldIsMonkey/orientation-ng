<template>
  <div class="multipleChoice">
    <div class="question">
      <!-- attribute.field_question -->
      {{questions[0].field_question}}
    </div>
    <div class="answers">
        <!-- attribute.field_a,b,c,d -->
        <div id="optionA">{{questions[0].field_A}}</div>
        <div id="optionB">{{questions[0].field_B}}</div>
        <div id="optionC">{{questions[0].field_C}}</div>
        <div id="optionD">{{questions[0].field_D}}</div>
    </div>
    
    <div class="correct" v-on:click=showCorrectAnswer()>
      <a class="button"> 正确答案 </a>
    </div>
    
    <div class="next" v-on:click=showNextQuestion()>
      <a class="button"> 下一题 </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'multipleChoice',
  mounted:function(){
    this.getAllQuestion()
  }
  ,
  data(){
    return {
      // questions and answers?
      // will be get from backend
      questions: [
        {
          field_correct: "a",
          field_question: "test1",
          field_A: "A",
          field_B: "B",
          field_C: "C",
          field_D: "D",
        }
      ]
   }
  }
  ,
  methods: {
    // click to choose
    showCorrectAnswer(){
      // get correct answer
      // get question number first will implement after construct a backend
      var correct = this.questions[0].field_correct;
      // show the correct answer
      switch(correct){
        case 'a':
          document.getElementById('optionA').style.color = "red";
          break;
        case 'b':
          document.getElementById('optionB').style.color = "red";
          break;
        case 'c':
          document.getElementById('optionB').style.color = "red";
          break;
        case 'd':
          document.getElementById('optionB').style.color = "red";
          break;
        default:
          console.log("这get不到要出大事啊")
      }
      // by default we just gonna change the color of the question
    },

    showNextQuestion(){
      // get next question

      // replace the current question

      // reset the color

      questions.shift();
    },

    getAllQuestion(){
      console.log("test");
      fetch("http://localhost:3000/api/get/multipleChoice")
      .then(res => {
            //res.data do something right
            console.log("test2");
            console.log(res.data);
            }).catch(res => {
            //do something wrong
            console.error(res.data);
      })
    }

    // if use the drupel, we need decode first
    // zhuanma(){}
  }
}
</script>
