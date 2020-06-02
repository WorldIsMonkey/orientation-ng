<template>
  <div class="multipleChoice">
    <div class="question">
      <!-- attribute.field_question -->
      <p> 题目: </p> <input v-model="question" class="input" type="text" placeholder="在这写题目">
    </div>
    <div class="answers">
    <div id="optionADiv">
        <p> 选项A: </p> <input v-model="optionA" class="input" type="text" placeholder="在这写答案">
    </div>

    <div id="optionBDiv">
        <p> 选项B: </p> <input v-model="optionB" class="input" type="text" placeholder="在这写答案">
    </div>

    <div id="optionCDiv">
        <p> 选项C: </p> <input v-model="optionC" class="input" type="text" placeholder="在这写答案">
    </div>

    <div id="optionDDiv">
        <p> 选项D: </p> <input v-model="optionD" class="input" type="text" placeholder="在这写答案">
    </div>

    <div id="correctOptionDiv">
        <p>正确选项: </p> 
          <select v-model="selected">
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
          </select>
    </div>

    </div>
  
    <div class="confirm">
      <a class="button" v-on:click=confirmInsert()> 确认 </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'insertMultipleChoice',

  data(){
    return {
      // questions and answers?
      // will be get from backend

   }
  },

  methods: {
      confirmInsert(){
        if(this.question == null){
            alert("题目没写");
            return;
        }
        else if(this.optionA==null||this.optionB==null || this.optionC==null || this.optionD==null){
            alert("有空白选项");
            console.log("有空白的");
            return;
        }
        else if(this.selected == null){
            alert("没选正确答案");
            return;
        }
        else{
          console.log("全部ok");
          // form a object
          var question = {
                      field_correct: this.selected,
                      field_question: this.question,
                      field_A: this.optionA,
                      field_B: this.optionB,
                      field_C: this.optionC,
                      field_D: this.optionD,
          }
          // send to backend
            fetch('//localhost:3000/api/insert/multipleChoice', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(question)
            })
            .then(res => res.json())
            .then((response) => {
                if (response.success) {
                    console.log(response);
                } else {
                    console.error(response);
                }
            }).catch((error) => {
                console.error(error);
            })
        }

      }

    },


}
</script>
