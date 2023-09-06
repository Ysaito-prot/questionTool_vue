Vue.createApp({
  data: function () {
    return {
      QuestionShow: false,
      QuestionShow2: false,
      QuestionShow3: false,
      QuestionShow4: false,
      UserMsgShow100: false,
      UserMsgShow101: false,
      UserMsgShow102: false,
      UserloadingView100: false,
      calcStartupGraph: false,
      graph: false,
      bestIcon: false,
      bestImg: false,
      cheapestIcon: false,
      cheapestImg: false,
      questionView: false,
      scrollY: 0,
      colorChange01: false,
      colorChange02: false,
      colorChange1: false,
      colorChange2: false,
      colorChange3: false,
      colorChange4: false,
      colorChange5: false,
      colorChange6: false,
      colorChange100: false,
      QuestionShow100: false,
      QuestionShow101: false,
      QuestionShow102: false,
      QuestionShow103: false,
      QuestionShow104: false,
      QuestionShow105: false,
      QuestionShow106: false,
      QuestionShow107: false,
      QuestionShow108: false,
      allMsg: [],
      allMsg2: [],
      activeItem: null,
      answer: "",
      answer1: "",
      areas: [],
      tohoku: [],
      kanto: [],
      hokuriku: [],
      tokai: [],
      kansai: [],
      tyubu: [],
      sikoku: [],
      kyusyu: [],
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

    await this.wait(1000);
    this.msgOut(this.allMsg[0]);
    await this.wait(1000);
    delete this.allMsg[0]["loading"];
    await this.wait(1000);
    this.msgOut(this.allMsg[1]);
    await this.wait(1000);
    delete this.allMsg[1]["loading"];
    await this.wait(1000);
    this.QuestionShow = true;
    window.scrollTo({
      top: 50,
      behavior: "smooth",
    });
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
      this.questionView = !this.questionView;
      await this.wait(1000);
      this.msgOut(this.allMsg[2]);
      await this.wait(500);
      delete this.allMsg[2]["loading"];
      await this.wait(500);
      delete this.allMsg[2]["read"];
      await this.wait(1000);
      this.msgOut(this.allMsg[4]);
      await this.wait(1000);
      delete this.allMsg[4]["loading"];
      await this.wait(1000);
      this.msgOut(this.allMsg[5]);
      await this.wait(1000);
      delete this.allMsg[5]["loading"];
      await this.wait(1000);
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
      // これ以降はしっかり計算と同じ記述
      this.msgOut(this.allMsg[8]);
      await this.wait(1000);
      delete this.allMsg[8]["loading"];
      await this.wait(1000);
      this.QuestionShow2 = true;
      window.scrollTo({
        top: 530,
        behavior: "smooth",
      });
    },
    showFlash2: async function () {
      this.colorChange02 = true;
      await this.wait(1000);
      this.questionView = !this.questionView;
      await this.wait(1000);
      this.msgOut(this.allMsg[3]);
      await this.wait(500);
      delete this.allMsg[3]["loading"];
      await this.wait(500);
      delete this.allMsg[3]["read"];
      await this.wait(1000);
      this.msgOut(this.allMsg[4]);
      await this.wait(1000);
      delete this.allMsg[4]["loading"];
      await this.wait(1000);
      this.msgOut(this.allMsg[6]);
      await this.wait(1000);
      delete this.allMsg[6]["loading"];
      await this.wait(1000);
      window.scrollTo({
        top: 290,
        behavior: "smooth",
      });
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
      // これ以降はざっくり計算と同じ記述
      await this.wait(2000);
      this.msgOut(this.allMsg[7]);
      await this.wait(1000);
      delete this.allMsg[7]["loading"];
      await this.wait(1000);
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
      await this.wait(1000);
      this.msgOut(this.allMsg[8]);
      await this.wait(1000);
      delete this.allMsg[8]["loading"];
      await this.wait(1000);
      window.scrollTo({
        top: 920,
        behavior: "smooth",
      });
      this.QuestionShow2 = true;
    },
    unitBus: async function () {
      this.colorChange1 = true;
      this.colorChange4 = true;
      this.colorChange6 = true;
      await this.wait(1000);
      this.QuestionShow2 = false;
      this.colorChange1 = false;
      this.colorChange4 = false;
      this.colorChange6 = false;
      await this.wait(1000);
      this.msgOut(this.allMsg[9]);
      await this.wait(500);
      delete this.allMsg[9]["loading"];
      await this.wait(500);
      delete this.allMsg[9]["read"];
      await this.wait(1000);
      this.msgOut(this.allMsg[12]);
      await this.wait(1000);
      delete this.allMsg[12]["loading"];
      await this.wait(1000);
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 720,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1100,
          behavior: "smooth",
        });
      }
      this.QuestionShow3 = true;
    },
    tile: async function () {
      this.colorChange2 = true;
      this.colorChange3 = true;
      this.colorChange6 = true;
      await this.wait(1000);
      this.QuestionShow2 = false;
      this.colorChange2 = false;
      this.colorChange3 = false;
      this.colorChange6 = false;
      await this.wait(1000);
      this.msgOut(this.allMsg[10]);
      await this.wait(500);
      delete this.allMsg[10]["loading"];
      await this.wait(500);
      delete this.allMsg[10]["read"];
      await this.wait(1000);
      this.msgOut(this.allMsg[12]);
      await this.wait(1000);
      delete this.allMsg[12]["loading"];
      await this.wait(1000);
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 720,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1100,
          behavior: "smooth",
        });
      }
      this.QuestionShow3 = true;
    },
    notKnow1: async function () {
      this.colorChange2 = true;
      this.colorChange4 = true;
      this.colorChange5 = true;
      await this.wait(1000);
      this.QuestionShow2 = false;
      this.colorChange2 = false;
      this.colorChange4 = false;
      this.colorChange5 = false;
      await this.wait(1000);
      this.msgOut(this.allMsg[11]);
      await this.wait(500);
      delete this.allMsg[11]["loading"];
      await this.wait(500);
      delete this.allMsg[11]["read"];
      await this.wait(1000);
      this.msgOut(this.allMsg[12]);
      await this.wait(1000);
      delete this.allMsg[12]["loading"];
      await this.wait(1000);
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 720,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1100,
          behavior: "smooth",
        });
      }
      this.QuestionShow3 = true;
    },
    insufficient: async function () {
      this.colorChange1 = true;
      this.colorChange4 = true;
      this.colorChange6 = true;
      await this.wait(1000);
      this.QuestionShow3 = false;
      this.colorChange1 = false;
      this.colorChange4 = false;
      this.colorChange6 = false;
      await this.wait(1000);
      this.msgOut(this.allMsg[13]);
      await this.wait(500);
      delete this.allMsg[13]["loading"];
      await this.wait(500);
      delete this.allMsg[13]["read"];
      await this.wait(1000);
      this.msgOut(this.allMsg[16]);
      await this.wait(1000);
      delete this.allMsg[16]["loading"];
      await this.wait(1000);
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 900,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1300,
          behavior: "smooth",
        });
      }
      await this.wait(1000);
      this.msgOut(this.allMsg[17]);
      await this.wait(1000);
      delete this.allMsg[17]["loading"];
      await this.wait(1000);
      this.msgOut(this.allMsg[18]);
      await this.wait(1000);
      delete this.allMsg[18]["loading"];
      await this.wait(1000);
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 1030,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1430,
          behavior: "smooth",
        });
      }
      this.QuestionShow4 = true;
    },
    more: async function () {
      this.colorChange2 = true;
      this.colorChange3 = true;
      this.colorChange6 = true;
      await this.wait(1000);
      this.QuestionShow3 = false;
      this.colorChange2 = false;
      this.colorChange3 = false;
      this.colorChange6 = false;
      await this.wait(1000);
      this.msgOut(this.allMsg[14]);
      await this.wait(500);
      delete this.allMsg[14]["loading"];
      await this.wait(500);
      delete this.allMsg[14]["read"];
      await this.wait(1000);
      this.msgOut(this.allMsg[16]);
      await this.wait(1000);
      delete this.allMsg[16]["loading"];
      await this.wait(1000);
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 900,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1300,
          behavior: "smooth",
        });
      }
      await this.wait(1000);
      this.msgOut(this.allMsg[17]);
      await this.wait(1000);
      delete this.allMsg[17]["loading"];
      await this.wait(1000);
      this.msgOut(this.allMsg[18]);
      await this.wait(1000);
      delete this.allMsg[18]["loading"];
      await this.wait(1000);
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 980,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1430,
          behavior: "smooth",
        });
      }
      this.QuestionShow4 = true;
    },
    notKnow2: async function () {
      this.colorChange2 = true;
      this.colorChange4 = true;
      this.colorChange5 = true;
      await this.wait(1000);
      this.QuestionShow3 = false;
      this.colorChange2 = false;
      this.colorChange4 = false;
      this.colorChange5 = false;
      await this.wait(1000);
      this.msgOut(this.allMsg[15]);
      await this.wait(500);
      delete this.allMsg[15]["loading"];
      await this.wait(500);
      delete this.allMsg[15]["read"];
      await this.wait(1000);
      this.msgOut(this.allMsg[16]);
      await this.wait(1000);
      delete this.allMsg[16]["loading"];
      await this.wait(1000);
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 900,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1300,
          behavior: "smooth",
        });
      }
      await this.wait(1000);
      this.msgOut(this.allMsg[17]);
      await this.wait(1000);
      delete this.allMsg[17]["loading"];
      await this.wait(1000);
      this.msgOut(this.allMsg[18]);
      await this.wait(1000);
      delete this.allMsg[18]["loading"];
      await this.wait(1000);
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 980,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1430,
          behavior: "smooth",
        });
      }
      this.QuestionShow4 = true;
    },
    Breadth: async function () {
      this.colorChange1 = true;
      this.colorChange4 = true;
      this.colorChange6 = true;
      await this.wait(1000);
      this.QuestionShow4 = false;
      this.colorChange1 = false;
      this.colorChange4 = false;
      this.colorChange6 = false;
      await this.wait(1000);
      this.msgOut(this.allMsg[19]);
      await this.wait(500);
      delete this.allMsg[19]["loading"];
      await this.wait(500);
      delete this.allMsg[19]["read"];
      // 都道府県選択へ
      await this.wait(1000);
      this.msgOut(this.allMsg[22]);
      await this.wait(1000);
      delete this.allMsg[22]["loading"];
      await this.wait(1000);
      this.QuestionShow100 = true;
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 1280,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1690,
          behavior: "smooth",
        });
      }
    },
    save: async function () {
      this.colorChange2 = true;
      this.colorChange3 = true;
      this.colorChange6 = true;
      await this.wait(1000);
      this.QuestionShow4 = false;
      this.colorChange2 = false;
      this.colorChange3 = false;
      this.colorChange6 = false;
      await this.wait(1000);
      this.msgOut(this.allMsg[20]);
      await this.wait(500);
      delete this.allMsg[20]["loading"];
      await this.wait(500);
      delete this.allMsg[20]["read"];
      // 都道府県選択へ
      await this.wait(1000);
      this.msgOut(this.allMsg[22]);
      await this.wait(1000);
      delete this.allMsg[22]["loading"];
      await this.wait(1000);
      this.QuestionShow100 = true;
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 1280,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1690,
          behavior: "smooth",
        });
      }
    },
    nothing: async function () {
      this.colorChange2 = true;
      this.colorChange4 = true;
      this.colorChange5 = true;
      await this.wait(1000);
      this.QuestionShow4 = false;
      this.colorChange2 = false;
      this.colorChange4 = false;
      this.colorChange5 = false;
      await this.wait(1000);
      this.msgOut(this.allMsg[21]);
      await this.wait(500);
      delete this.allMsg[21]["loading"];
      await this.wait(500);
      delete this.allMsg[21]["read"];
      // 都道府県選択へ
      await this.wait(1000);
      this.msgOut(this.allMsg[22]);
      await this.wait(1000);
      delete this.allMsg[22]["loading"];
      await this.wait(1000);
      this.QuestionShow100 = true;
      if (this.colorChange01 === true) {
        window.scrollTo({
          top: 1280,
          behavior: "smooth",
        });
      }
      if (this.colorChange02 === true) {
        window.scrollTo({
          top: 1690,
          behavior: "smooth",
        });
      }
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
  },
  watch: {
    // ターゲットが変化したとき呼び出されるハンドラ
    answer: async function (newStock, oldStock) {
      if (newStock === "北海道・東北") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.QuestionShow100 = false;
        this.QuestionShow101 = true;
      }
      if (newStock === "関東") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.QuestionShow100 = false;
        this.QuestionShow102 = true;
      }
      if (newStock === "北陸・甲信越") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.QuestionShow100 = false;
        this.QuestionShow103 = true;
      }
      if (newStock === "東海") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.QuestionShow100 = false;
        this.QuestionShow104 = true;
      }
      if (newStock === "関西") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.QuestionShow100 = false;
        this.QuestionShow105 = true;
      }
      if (newStock === "中国") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.QuestionShow100 = false;
        this.QuestionShow106 = true;
      }
      if (newStock === "四国") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.QuestionShow100 = false;
        this.QuestionShow107 = true;
      }
      if (newStock === "九州・沖縄") {
        await this.wait(1000);
        this.colorChange100 = false;
        this.QuestionShow100 = false;
        this.QuestionShow108 = true;
      }
    },
    answer1: async function (newStock, oldStock) {
      await this.wait(1000);
      this.QuestionShow101 = false;
      this.QuestionShow102 = false;
      this.QuestionShow103 = false;
      this.QuestionShow104 = false;
      this.QuestionShow105 = false;
      this.QuestionShow106 = false;
      this.QuestionShow107 = false;
      this.QuestionShow108 = false;
      await this.wait(500);
      this.UserMsgShow100 = true;
      await this.wait(500);
      this.UserMsgShow101 = true;
      this.UserloadingView100 = true;
      await this.wait(500);
      this.UserMsgShow102 = true;
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
