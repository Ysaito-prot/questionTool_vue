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
  created: async function () {
    await this.wait(1000);
    this.AdvisorMsgShow0 = true;
    await this.wait(1000);
    this.AdvisorMsgShow1 = true;
    this.AdvloadingView = true;
  },
  // Vueインスタンスに変化があったら発動する
  updated: async function () {
    if (this.AdvisorMsgShow1 === true && this.AdvisorMsgShow2 === false) {
      await this.wait(1000);
      this.AdvisorMsgShow2 = true;

      await this.wait(1000);
      this.AdvisorMsgShow3 = true;
      this.AdvloadingView1 = true;
    }
    if (this.AdvisorMsgShow3 === true && this.AdvisorMsgShow4 === false) {
      await this.wait(1000);
      this.QuestionShow = true;
      window.scrollTo({
        top: 50,
        behavior: "smooth",
      });
    }

    // 計算ボタンの条件分岐
    // ざっくり計算を押した場合
    if (this.UserMsgShow3 === true) {
      await this.wait(1000);
      this.AdvisorMsgShow4 = true;

      await this.wait(1000);
      this.AdvisorMsgShow5 = true;
      this.AdvloadingView3 = true;

      await this.wait(1000);
      this.AdvisorMsgShow6 = true;

      await this.wait(1000);
      this.AdvisorMsgShow7 = true;
      this.AdvloadingView4 = true;
    }
    // しっくり計算を押した場合
    if (this.UserMsgShow6 === true) {
      await this.wait(1000);
      this.AdvisorMsgShow4 = true;
      await this.wait(1000);
      this.AdvisorMsgShow5 = true;
      this.AdvloadingView3 = true;
      await this.wait(1000);
      this.AdvisorMsgShow8 = true;
      await this.wait(1000);
      this.AdvisorMsgShow9 = true;
      this.AdvloadingView5 = true;
      if (this.AdvisorMsgShow9 === true && this.bestImg === false) {
        await this.wait(1000);
        window.scrollTo({
          top: 290,
          behavior: "smooth",
        });
      }
      await this.wait(1000);
      this.graph = true;
      this.bestImg = true;
      await this.wait(1000);
      this.bestIcon = true;
      await this.wait(1000);
      this.cheapestImg = true;
      await this.wait(1000);
      this.cheapestIcon = true;
      await this.wait(1000);
      this.cheapestImg = true;
      await this.wait(1000);
      this.AdvisorMsgShow10 = true;
      await this.wait(1000);
      this.AdvisorMsgShow11 = true;
      this.AdvloadingView6 = true;
    }
  },
  methods: {
    wait: function (time) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
      });
    },
    showFlash: async function () {
      await this.wait(1000);
      this.view = !this.view;

      await this.wait(1000);
      this.UserMsgShow1 = true;
      await this.wait(1000);
      this.UserMsgShow2 = true;
      this.UserloadingView = true;
      await this.wait(1000);
      this.UserMsgShow3 = true;
    },
    showFlash2: async function () {
      await this.wait(1000);
      this.view = !this.view;
      await this.wait(1000);
      this.UserMsgShow4 = true;
      await this.wait(1000);
      this.UserMsgShow5 = true;
      this.UserloadingView = true;
      await this.wait(1000);
      this.UserMsgShow6 = true;
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
