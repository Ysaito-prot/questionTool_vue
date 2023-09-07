Vue.createApp({
  data: function () {
    return {
      QuestionShow: false,
      UserMsgShow100: false,
      UserMsgShow101: false,
      UserloadingView100: true,
      graph: false,
      bestIcon: false,
      bestImg: false,
      cheapestIcon: false,
      cheapestImg: false,
      colorChange01: false,
      colorChange02: false,
      colorChange100: false,
      allMsg: [],
      allMsg2: [],
      activeItem: null,
      answer: "",
      questionAnswer: "",
      areas: [],
      newAreas: [],
      tohoku: [],
      kanto: [],
      hokuriku: [],
      tokai: [],
      kansai: [],
      tyubu: [],
      sikoku: [],
      kyusyu: [],
      question: [],
      questionUp: [],
      questionUpView: false,
      todohukenQuestion: false,
    };
  },
  // 画面が読み込まれたときに1度だけ発動
  created: async function () {
    const res0 = await fetch("./asset/allMsg.json");
    const users0 = await res0.json();
    this.allMsg = users0;
    const res1 = await fetch("./asset/areas.json");
    const users1 = await res1.json();
    this.areas = users1;
    const res2 = await fetch("./asset/tohoku.json");
    const users2 = await res2.json();
    this.tohoku = users2;
    const res3 = await fetch("./asset/kanto.json");
    const users3 = await res3.json();
    this.kanto = users3;
    const res4 = await fetch("./asset/hokuriku.json");
    const users4 = await res4.json();
    this.hokuriku = users4;
    const res5 = await fetch("./asset/tokai.json");
    const users5 = await res5.json();
    this.tokai = users5;
    const res6 = await fetch("./asset/kansai.json");
    const users6 = await res6.json();
    this.kansai = users6;
    const res7 = await fetch("./asset/tyubu.json");
    const users7 = await res7.json();
    this.tyubu = users7;
    const res8 = await fetch("./asset/sikoku.json");
    const users8 = await res8.json();
    this.sikoku = users8;
    const res9 = await fetch("./asset/kyusyu.json");
    const users9 = await res9.json();
    this.kyusyu = users9;
    const res10 = await fetch("./asset/question.json");
    const users10 = await res10.json();
    this.question = users10;

    await this.wait(1000);
    this.advMsgIn(this.allMsg[0], this.allMsg[1]);
    await this.wait(4000);
    this.QuestionShow = true;
    this.scroll(50);
  },
  methods: {
    wait: function (time) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
      });
    },
    showFlash: async function () {
      this.colorChange01 = true;
      await this.wait(1000);
      this.QuestionShow = false;
      await this.wait(1000);
      this.userMsgIn(this.allMsg[2]);
      await this.wait(2000);
      this.advMsgIn(this.allMsg[4], this.allMsg[5]);
      await this.wait(4000);
      this.scroll(300);
      // これ以降はしっかり計算と同じ記述
      this.advMsgIn(this.allMsg[8]);
      await this.wait(2000);
      this.questionMsgOut(this.question[0], this.question[1], this.question[2]);
      this.questionUpView = true;
      this.scroll(470);
    },
    showFlash2: async function () {
      this.colorChange02 = true;
      await this.wait(1000);
      this.QuestionShow = false;
      await this.wait(1000);
      this.userMsgIn(this.allMsg[3]);
      await this.wait(2000);
      this.advMsgIn(this.allMsg[4], this.allMsg[6]);
      await this.wait(4000);
      this.scroll(290);
      // グラフ表示
      await this.wait(1000);
      this.graph = true;
      this.bestImg = true;
      await this.wait(1000);
      this.bestIcon = true;
      await this.wait(1000);
      this.cheapestImg = true;
      await this.wait(1000);
      this.cheapestIcon = true;
      await this.wait(2000);
      this.advMsgIn(this.allMsg[7]);
      this.scroll(800);
      await this.wait(2000);
      // これ以降はざっくり計算と同じ記述
      this.advMsgIn(this.allMsg[8]);
      await this.wait(2000);
      this.questionMsgOut(this.question[0], this.question[1], this.question[2]);
      this.questionUpView = true;
      this.scroll(920);
    },
    onActive(item) {
      this.colorChange100 = true;
      this.activeItem = item;
    },
    loadingShow: function (item) {
      this.activeItem2 = item;
    },
    msgOut: function (x) {
      this.allMsg2.push(x);
      return this.allMsg2;
    },
    questionMsgOut: function (x, y, z = undefined) {
      if (z === undefined) {
        this.questionUp.push(x, y);
      }
      if (z !== undefined) {
        this.questionUp.push(x, y, z);
      }
      return this.questionUp;
    },
    todohukenMsgOut: function (x) {
      this.newAreas.push(x);
      return this.newAreas;
    },
    scroll: function (x) {
      window.scrollTo({
        top: x,
        behavior: "smooth",
      });
    },
    advMsgIn: async function (x, y = undefined) {
      this.msgOut(x);
      await this.wait(1000);
      delete x["loading"];
      if (y !== undefined) {
        await this.wait(1000);
        this.msgOut(y);
        await this.wait(1000);
        delete y["loading"];
      }
    },
    userMsgIn: async function (x) {
      this.msgOut(x);
      await this.wait(500);
      delete x["loading"];
      await this.wait(500);
      delete x["read"];
    },
  },
  watch: {
    // ターゲットが変化したとき呼び出されるハンドラ
    answer: async function (newStock, oldStock) {
      if (newStock === "北海道・東北") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.newAreas = this.tohoku;
        this.answer = "a";
      }
      if (newStock === "関東") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.newAreas = this.kanto;
        this.answer = "a";
      }
      if (newStock === "北陸・甲信越") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.newAreas = this.hokuriku;
        this.answer = "a";
      }
      if (newStock === "東海") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.newAreas = this.tokai;
        this.answer = "a";
      }
      if (newStock === "関西") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.newAreas = this.kansai;
        this.answer = "a";
      }
      if (newStock === "中国") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.newAreas = this.tyubu;
        this.answer = "a";
      }
      if (newStock === "四国") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.newAreas = this.sikoku;
        this.answer = "a";
      }
      if (newStock === "九州・沖縄") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.newAreas = this.kyusyu;
        this.answer = "a";
      }
      if (
        newStock !== "a" &&
        newStock !== "北海道・東北" &&
        newStock !== "関東" &&
        newStock !== "北陸・甲信越" &&
        newStock !== "東海" &&
        newStock !== "関西" &&
        newStock !== "中国" &&
        newStock !== "四国" &&
        newStock !== "九州・沖縄"
      ) {
        await this.wait(1000);
        this.colorChange100 = false;
        this.todohukenQuestion = false;
        await this.wait(500);
        this.UserMsgShow100 = true;
        await this.wait(500);
        this.UserloadingView100 = false;
        await this.wait(500);
        this.UserMsgShow101 = true;
      }
    },
    questionAnswer: async function (newStock, oldStock) {
      await this.wait(1000);
      this.questionUpView = false;
      await this.wait(1000);
      if (
        this.questionAnswer === "ユニットバス" ||
        this.questionAnswer === "タイル貼り" ||
        (this.questionAnswer === "わからない" &&
          this.questionUp[0].msg === "ユニットバス")
      ) {
        if (this.questionAnswer === "ユニットバス") {
          this.userMsgIn(this.allMsg[9]);
        }
        if (this.questionAnswer === "タイル貼り") {
          this.userMsgIn(this.allMsg[10]);
        }
        if (
          this.questionAnswer === "わからない" &&
          this.questionUp[0].msg === "ユニットバス"
        ) {
          this.userMsgIn(this.allMsg[11]);
        }
        await this.wait(2000);
        this.questionAnswer = "";
        this.advMsgIn(this.allMsg[12]);
        await this.wait(2000);
        if (this.colorChange01 === true) {
          this.scroll(660);
        }
        if (this.colorChange02 === true) {
          this.scroll(1100);
        }
        this.colorChange100 = false;
        this.questionUp = [];
        this.questionMsgOut(
          this.question[3],
          this.question[4],
          this.question[8]
        );
        this.questionUpView = true;
      }
      if (
        this.questionAnswer === "2畳未満" ||
        this.questionAnswer === "2畳以上" ||
        (this.questionAnswer === "わからない" &&
          this.questionUp[0].msg === "2畳未満")
      ) {
        if (this.questionAnswer === "2畳未満") {
          this.userMsgIn(this.allMsg[13]);
        }
        if (this.questionAnswer === "2畳以上") {
          this.userMsgIn(this.allMsg[14]);
        }
        if (
          this.questionAnswer === "わからない" &&
          this.questionUp[0].msg === "2畳未満"
        ) {
          this.userMsgIn(this.allMsg[15]);
        }
        await this.wait(2000);
        this.advMsgIn(this.allMsg[16]);
        await this.wait(2000);
        if (this.colorChange01 === true) {
          this.scroll(850);
        }
        if (this.colorChange02 === true) {
          this.scroll(1300);
        }
        await this.wait(1000);
        this.advMsgIn(this.allMsg[17], this.allMsg[18]);
        await this.wait(4000);
        if (this.colorChange01 === true) {
          this.scroll(980);
        }
        if (this.colorChange02 === true) {
          this.scroll(1430);
        }
        this.colorChange100 = false;
        this.questionUp = [];
        this.questionMsgOut(
          this.question[5],
          this.question[6],
          this.question[7]
        );
        this.questionUpView = true;
      }
      if (
        this.questionAnswer === "広さ重視" ||
        this.questionAnswer === "節水重視" ||
        this.questionAnswer === "特になし"
      ) {
        if (this.questionAnswer === "広さ重視") {
          this.userMsgIn(this.allMsg[19]);
        }
        if (this.questionAnswer === "節水重視") {
          this.userMsgIn(this.allMsg[20]);
        }
        if (this.questionAnswer === "特になし") {
          this.userMsgIn(this.allMsg[21]);
        }
        // 都道府県選択へ
        await this.wait(2000);
        this.advMsgIn(this.allMsg[22]);
        await this.wait(2000);
        this.colorChange100 = false;
        this.newAreas = this.areas;
        this.todohukenQuestion = true;
        if (this.colorChange01 === true) {
          this.scroll(1200);
        }
        if (this.colorChange02 === true) {
          this.scroll(1690);
        }
      }
    },
  },
})
  .component("loading", {
    template: `<div class="spinner-box">
  <div class="pulse-container">  
    <div class="pulse-bubble pulse-bubble-1"></div>
    <div class="pulse-bubble pulse-bubble-2"></div>
    <div class="pulse-bubble pulse-bubble-3"></div>
  </div>
</div>`,
    data: function () {
      return {};
    },
  })
  .mount("#app");
