Vue.createApp({
  data: function () {
    return {
      AdvisorMsgShow0: false,
      AdvisorMsgShow1: false,
      AdvisorMsgShow2: false,
      AdvisorMsgShow3: false,
      AdvisorMsgShow4: false,
      AdvisorMsgShow5: false,
      AdvisorMsgShow6: false,
      AdvisorMsgShow7: false,
      AdvisorMsgShow8: false,
      AdvisorMsgShow9: false,
      AdvisorMsgShow10: false,
      AdvisorMsgShow11: false,
      QuestionShow: false,
      UserMsgShow1: false,
      UserMsgShow2: false,
      UserMsgShow3: false,
      UserMsgShow4: false,
      UserMsgShow5: false,
      UserMsgShow6: false,
      calcStartupGraph: false,
      graph: false,
      bestIcon: false,
      bestImg: false,
      cheapestIcon: false,
      cheapestImg: false,
      view: false,
      AdvloadingView: false,
      AdvloadingView1: false,
      AdvloadingView2: false,
      AdvloadingView3: false,
      AdvloadingView4: false,
      AdvloadingView5: false,
      AdvloadingView6: false,
      UserloadingView: false,
      scrollY: 0,
    };
  },
  // 画面が読み込まれたときに1度だけ発動
  created() {
    // setTimeoutで1000ms後にshowをfalseにする
    // setTimeout(() => {
    //   this.AdvisorMsgShow0 = true;
    // }, 1000);
    
    this.waiting;
    this.AdvisorMsgShow0 = true;
    
    setTimeout(() => {
      this.AdvisorMsgShow1 = true;
      this.AdvloadingView = true;
    }, 2000);
  },
  // Vueインスタンスに変化があったら発動する
  updated() {
    if (this.AdvisorMsgShow1 === true && this.AdvisorMsgShow2 === false) {
      setTimeout(() => {
        this.AdvisorMsgShow2 = true;
      }, 1000);
      setTimeout(() => {
        this.AdvisorMsgShow3 = true;
        this.AdvloadingView1 = true;
      }, 2000);
    }
    if (this.AdvisorMsgShow3 === true && this.AdvisorMsgShow4 === false) {
      setTimeout(() => {
        this.QuestionShow = true;
        window.scrollTo({
          top: 50,
          behavior: "smooth",
        });
      }, 1000);
    }

    // 計算ボタンの条件分岐
    // ざっくり計算を押した場合
    if (this.UserMsgShow3 === true) {
      setTimeout(() => {
        this.AdvisorMsgShow4 = true;
      }, 1000);
      setTimeout(() => {
        this.AdvisorMsgShow5 = true;
        this.AdvloadingView3 = true;
      }, 2000);
      setTimeout(() => {
        this.AdvisorMsgShow6 = true;
      }, 3000);
      setTimeout(() => {
        this.AdvisorMsgShow7 = true;
        this.AdvloadingView4 = true;
      }, 4000);
    }
    // しっくり計算を押した場合
    if (this.UserMsgShow6 === true) {
      setTimeout(() => {
        this.AdvisorMsgShow4 = true;
      }, 1000);
      setTimeout(() => {
        this.AdvisorMsgShow5 = true;
        this.AdvloadingView3 = true;
      }, 2000);
      setTimeout(() => {
        this.AdvisorMsgShow8 = true;
      }, 3000);
      setTimeout(() => {
        this.AdvisorMsgShow9 = true;
        this.AdvloadingView5 = true;
      }, 4000);
      if (this.AdvisorMsgShow9 === true && this.bestImg === false) {
        setTimeout(() => {
          window.scrollTo({
            top: 290,
            behavior: "smooth",
          });
        }, 500);
      }
      setTimeout(() => {
        this.bestIcon = true;
      }, 7000);
      setTimeout(() => {
        this.graph = true;
        this.bestImg = true;
      }, 6000);
      setTimeout(() => {
        this.cheapestIcon = true;
      }, 9000);
      setTimeout(() => {
        this.cheapestImg = true;
      }, 8000);
      setTimeout(() => {
        this.AdvisorMsgShow10 = true;
      }, 10000);
      setTimeout(() => {
        this.AdvisorMsgShow11 = true;
        this.AdvloadingView6 = true;
      }, 11000);
    }
  },
  methods: {
    async waiting() {
      await this.wait(1000);
    },
    async waiting2() {
      await this.wait(2000);
    },
    wait: function (time) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
      });
    },
    showFlash() {
      setTimeout(() => {
        this.view = !this.view;
      }, 1000);
      setTimeout(() => {
        this.UserMsgShow1 = true;
      }, 2000);
      setTimeout(() => {
        this.UserMsgShow2 = true;
        this.UserloadingView = true;
      }, 3000);
      setTimeout(() => {
        this.UserMsgShow3 = true;
      }, 3500);
    },
    showFlash2() {
      setTimeout(() => {
        this.view = !this.view;
      }, 1000);
      setTimeout(() => {
        this.UserMsgShow4 = true;
      }, 2000);
      setTimeout(() => {
        this.UserMsgShow5 = true;
        this.UserloadingView = true;
      }, 3000);
      setTimeout(() => {
        this.UserMsgShow6 = true;
      }, 3500);
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
