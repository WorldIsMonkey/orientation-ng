<template>
  <div class="multipleChoice">
    <div class="question">
      <!-- attribute.field_question -->
      {{questions[0].field_question}}
    </div>
    <div class="answers">
        <!-- attribute.field_a,b,c,d -->
        <div class="optionA">{{questions[0].field_A}}</div>
        <div class="optionB">{{questions[0].field_B}}</div>
        <div class="optionC">{{questions[0].field_C}}</div>
        <div class="optionD">{{questions[0].field_D}}</div>
    </div>
    <div class="correct" v-on:click=showCorrectAnswer()></div>
    <div class="next" v-on:click=showNextQuestion()></div>
  </div>
</template>

<script>
export default {
  name: 'multipleChoice',

  data(){
    return {
      // questions and answers?
      questions: [
        {
          field_option: "a",
          field_question: "test1",
          field_A: "A",
          field_B: "B",
          field_C: "C",
          field_D: "D",
        }
      ]
   }
  },

  methods: {
    // click to choose
    showCorrectAnswer(){
      // get attributes.field_option
      var correct = questions[0].field_option;
      // show the correct answer
      switch(correct){
        case "a": 
          //  
        break;
      }
    },

    showNextQuestion(){
      // get next question

      // replace the current question
    },

    // zhuanma(){}
  }
}

</script>
