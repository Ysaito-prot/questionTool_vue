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
      AdvisorMsgShow12: false,
      AdvisorMsgShow13: false,
      AdvisorMsgShow14: false,
      AdvisorMsgShow15: false,
      AdvisorMsgShow16: false,
      AdvisorMsgShow17: false,
      AdvisorMsgShow18: false,
      AdvisorMsgShow19: false,
      AdvisorMsgShow20: false,
      AdvisorMsgShow21: false,
      AdvisorMsgShow100: false,
      AdvisorMsgShow101: false,
      QuestionShow: false,
      QuestionShow2: false,
      QuestionShow3: false,
      QuestionShow4: false,
      UserMsgShow1: false,
      UserMsgShow2: false,
      UserMsgShow3: false,
      UserMsgShow4: false,
      UserMsgShow5: false,
      UserMsgShow6: false,
      UserMsgShow7: false,
      UserMsgShow8: false,
      UserMsgShow9: false,
      UserMsgShow10: false,
      UserMsgShow11: false,
      UserMsgShow12: false,
      UserMsgShow13: false,
      UserMsgShow14: false,
      UserMsgShow15: false,
      UserMsgShow16: false,
      UserMsgShow17: false,
      UserMsgShow18: false,
      UserMsgShow19: false,
      UserMsgShow20: false,
      UserMsgShow21: false,
      UserMsgShow22: false,
      UserMsgShow23: false,
      UserMsgShow24: false,
      UserMsgShow25: false,
      UserMsgShow26: false,
      UserMsgShow27: false,
      UserMsgShow28: false,
      UserMsgShow29: false,
      UserMsgShow30: false,
      UserMsgShow31: false,
      UserMsgShow32: false,
      UserMsgShow33: false,
      UserMsgShow100: false,
      UserMsgShow101: false,
      UserMsgShow102: false,
      calcStartupGraph: false,
      graph: false,
      bestIcon: false,
      bestImg: false,
      cheapestIcon: false,
      cheapestImg: false,
      questionView: false,
      AdvloadingView: false,
      AdvloadingView1: false,
      AdvloadingView2: false,
      AdvloadingView3: false,
      AdvloadingView4: false,
      AdvloadingView5: false,
      AdvloadingView6: false,
      AdvloadingView7: false,
      AdvloadingView8: false,
      AdvloadingView9: false,
      AdvloadingView10: false,
      AdvloadingView11: false,
      AdvloadingView100: false,
      UserloadingView: false,
      UserloadingView2: false,
      UserloadingView3: false,
      UserloadingView4: false,
      UserloadingView100: false,
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
      activeItem: null,
      answer: "",
      answer1: "",
      areas: [
        {
          item: "北海道・東北",
          kind: "Input_items_20_1",
        },
        {
          item: "関東",
          kind: "Input_items_20_2",
        },
        {
          item: "北陸・甲信越",
          kind: "Input_items_20_3",
        },
        {
          item: "東海",
          kind: "Input_items_20_4",
        },
        {
          item: "関西",
          kind: "Input_items_20_5",
        },
        {
          item: "中国",
          kind: "Input_items_20_6",
        },
        {
          item: "四国",
          kind: "Input_items_20_7",
        },
        {
          item: "九州・沖縄",
          kind: "Input_items_20_8",
        },
      ],
      tohoku: [
        {
          item: "北海道",
          kind: "Input_items_21_1",
        },
        {
          item: "青森県",
          kind: "Input_items_21_2",
        },
        {
          item: "岩手県",
          kind: "Input_items_21_3",
        },
        {
          item: "宮城県",
          kind: "Input_items_21_4",
        },
        {
          item: "秋田県",
          kind: "Input_items_21_5",
        },
        {
          item: "山形県",
          kind: "Input_items_21_6",
        },
        {
          item: "福島県",
          kind: "Input_items_21_7",
        },
      ],
      kanto: [
        {
          item: "茨城県",
          kind: "Input_items_22_1",
        },
        {
          item: "栃木県",
          kind: "Input_items_22_2",
        },
        {
          item: "群馬県",
          kind: "Input_items_22_3",
        },
        {
          item: "埼玉県",
          kind: "Input_items_22_4",
        },
        {
          item: "千葉県",
          kind: "Input_items_22_5",
        },
        {
          item: "東京都",
          kind: "Input_items_22_6",
        },
        {
          item: "神奈川県",
          kind: "Input_items_22_7",
        },
      ],
      hokuriku: [
        {
          item: "新潟県",
          kind: "Input_items_23_1",
        },
        {
          item: "富山県",
          kind: "Input_items_23_2",
        },
        {
          item: "石川県",
          kind: "Input_items_23_3",
        },
        {
          item: "福井県",
          kind: "Input_items_23_4",
        },
        {
          item: "山梨県",
          kind: "Input_items_23_5",
        },
        {
          item: "長野県",
          kind: "Input_items_23_6",
        },
      ],
      tokai: [
        {
          item: "岐阜県",
          kind: "Input_items_24_1",
        },
        {
          item: "静岡県",
          kind: "Input_items_24_2",
        },
        {
          item: "愛知県",
          kind: "Input_items_24_3",
        },
        {
          item: "三重県",
          kind: "Input_items_24_4",
        },
      ],
      kansai: [
        {
          item: "滋賀県",
          kind: "Input_items_22_1",
        },
        {
          item: "京都府",
          kind: "Input_items_22_2",
        },
        {
          item: "大阪府",
          kind: "Input_items_22_3",
        },
        {
          item: "兵庫県",
          kind: "Input_items_22_4",
        },
        {
          item: "奈良県",
          kind: "Input_items_22_5",
        },
        {
          item: "和歌山県",
          kind: "Input_items_22_6",
        },
      ],
      tyubu: [
        {
          item: "鳥取県",
          kind: "Input_items_22_1",
        },
        {
          item: "島根県",
          kind: "Input_items_22_2",
        },
        {
          item: "岡山県",
          kind: "Input_items_22_3",
        },
        {
          item: "広島県",
          kind: "Input_items_22_4",
        },
        {
          item: "山口県",
          kind: "Input_items_22_5",
        },
      ],
      sikoku: [
        {
          item: "徳島県",
          kind: "Input_items_22_1",
        },
        {
          item: "香川県",
          kind: "Input_items_22_2",
        },
        {
          item: "愛媛県",
          kind: "Input_items_22_3",
        },
        {
          item: "高知県",
          kind: "Input_items_22_4",
        },
      ],
      kyusyu: [
        {
          item: "福岡県",
          kind: "Input_items_20_1",
        },
        {
          item: "佐賀県",
          kind: "Input_items_20_2",
        },
        {
          item: "長崎県",
          kind: "Input_items_20_3",
        },
        {
          item: "熊本県",
          kind: "Input_items_20_4",
        },
        {
          item: "大分県",
          kind: "Input_items_20_5",
        },
        {
          item: "宮崎県",
          kind: "Input_items_20_6",
        },
        {
          item: "鹿児島県",
          kind: "Input_items_20_7",
        },
        {
          item: "沖縄県",
          kind: "Input_items_20_8",
        },
      ],
    };
  },
  // 画面が読み込まれたときに1度だけ発動
  created: async function () {
    await this.wait(1000);
    this.AdvisorMsgShow0 = true;
    await this.wait(1000);
    this.AdvisorMsgShow1 = true;
    this.AdvloadingView = true;
    await this.wait(1000);
    this.AdvisorMsgShow2 = true;
    await this.wait(1000);
    this.AdvisorMsgShow3 = true;
    this.AdvloadingView1 = true;
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
      this.UserMsgShow1 = true;
      await this.wait(1000);
      this.UserMsgShow2 = true;
      this.UserloadingView = true;
      await this.wait(500);
      this.UserMsgShow3 = true;
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
      await this.wait(1000);
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
      // これ以降はしっかり計算と同じ記述
      await this.wait(1000);
      this.AdvisorMsgShow12 = true;
      await this.wait(1000);
      this.AdvisorMsgShow13 = true;
      this.AdvloadingView7 = true;
      await this.wait(1000);
      this.QuestionShow2 = true;
      window.scrollTo({
        top: 450,
        behavior: "smooth",
      });
    },
    showFlash2: async function () {
      this.colorChange02 = true;
      await this.wait(1000);
      this.questionView = !this.questionView;
      await this.wait(1000);
      this.UserMsgShow4 = true;
      await this.wait(1000);
      this.UserMsgShow5 = true;
      this.UserloadingView = true;
      await this.wait(500);
      this.UserMsgShow6 = true;
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
      // これ以降はざっくり計算と同じ記述
      await this.wait(1000);
      this.AdvisorMsgShow12 = true;
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
      await this.wait(1000);
      this.AdvisorMsgShow13 = true;
      this.AdvloadingView7 = true;
      await this.wait(1000);
      window.scrollTo({
        top: 900,
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
      this.UserMsgShow7 = true;
      await this.wait(1000);
      this.UserMsgShow8 = true;
      this.UserloadingView2 = true;
      await this.wait(500);
      this.UserMsgShow9 = true;
      await this.wait(1000);
      this.AdvisorMsgShow14 = true;
      await this.wait(1000);
      this.AdvisorMsgShow15 = true;
      this.AdvloadingView8 = true;
      await this.wait(1000);
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 670,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
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
      this.UserMsgShow10 = true;
      await this.wait(1000);
      this.UserMsgShow11 = true;
      this.UserloadingView2 = true;
      await this.wait(500);
      this.UserMsgShow12 = true;
      await this.wait(1000);
      this.AdvisorMsgShow14 = true;
      await this.wait(1000);
      this.AdvisorMsgShow15 = true;
      this.AdvloadingView8 = true;
      await this.wait(1000);
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 670,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
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
      this.UserMsgShow13 = true;
      await this.wait(1000);
      this.UserMsgShow14 = true;
      this.UserloadingView2 = true;
      await this.wait(500);
      this.UserMsgShow15 = true;
      await this.wait(1000);
      this.AdvisorMsgShow14 = true;
      await this.wait(1000);
      this.AdvisorMsgShow15 = true;
      this.AdvloadingView8 = true;
      await this.wait(1000);
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 670,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
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
      this.UserMsgShow16 = true;
      await this.wait(1000);
      this.UserMsgShow17 = true;
      this.UserloadingView3 = true;
      await this.wait(500);
      this.UserMsgShow18 = true;
      await this.wait(1000);
      this.AdvisorMsgShow16 = true;
      await this.wait(1000);
      this.AdvisorMsgShow17 = true;
      this.AdvloadingView9 = true;
      await this.wait(1000);
      this.AdvisorMsgShow18 = true;
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 870,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
        window.scrollTo({
          top: 1300,
          behavior: "smooth",
        });
      }
      await this.wait(1000);
      this.AdvisorMsgShow19 = true;
      this.AdvloadingView10 = true;
      await this.wait(1000);
      this.AdvisorMsgShow20 = true;
      await this.wait(1000);
      this.AdvisorMsgShow21 = true;
      this.AdvloadingView11 = true;
      await this.wait(1000);
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 980,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
        window.scrollTo({
          top: 1410,
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
      this.UserMsgShow19 = true;
      await this.wait(1000);
      this.UserMsgShow20 = true;
      this.UserloadingView3 = true;
      await this.wait(500);
      this.UserMsgShow21 = true;
      await this.wait(1000);
      this.AdvisorMsgShow16 = true;
      await this.wait(1000);
      this.AdvisorMsgShow17 = true;
      this.AdvloadingView9 = true;
      await this.wait(1000);
      this.AdvisorMsgShow18 = true;
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 870,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
        window.scrollTo({
          top: 1300,
          behavior: "smooth",
        });
      }
      await this.wait(1000);
      this.AdvisorMsgShow19 = true;
      this.AdvloadingView10 = true;
      await this.wait(1000);
      this.AdvisorMsgShow20 = true;
      await this.wait(1000);
      this.AdvisorMsgShow21 = true;
      this.AdvloadingView11 = true;
      await this.wait(1000);
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 980,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
        window.scrollTo({
          top: 1410,
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
      this.UserMsgShow22 = true;
      await this.wait(1000);
      this.UserMsgShow23 = true;
      this.UserloadingView3 = true;
      await this.wait(500);
      this.UserMsgShow24 = true;
      await this.wait(1000);
      this.AdvisorMsgShow16 = true;
      await this.wait(1000);
      this.AdvisorMsgShow17 = true;
      this.AdvloadingView9 = true;
      await this.wait(1000);
      this.AdvisorMsgShow18 = true;
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 870,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
        window.scrollTo({
          top: 1300,
          behavior: "smooth",
        });
      }
      await this.wait(1000);
      this.AdvisorMsgShow19 = true;
      this.AdvloadingView10 = true;
      await this.wait(1000);
      this.AdvisorMsgShow20 = true;
      await this.wait(1000);
      this.AdvisorMsgShow21 = true;
      this.AdvloadingView11 = true;
      await this.wait(1000);
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 980,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
        window.scrollTo({
          top: 1410,
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
      this.UserMsgShow25 = true;
      await this.wait(1000);
      this.UserMsgShow26 = true;
      this.UserloadingView4 = true;
      await this.wait(500);
      this.UserMsgShow27 = true;
      // 都道府県選択へ
      await this.wait(1000);
      this.AdvisorMsgShow100 = true;
      await this.wait(1000);
      this.AdvisorMsgShow101 = true;
      this.AdvloadingView100 = true;
      await this.wait(1000);
      this.QuestionShow100 = true;
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 1300,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
        window.scrollTo({
          top: 1730,
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
      this.UserMsgShow28 = true;
      await this.wait(1000);
      this.UserMsgShow29 = true;
      this.UserloadingView4 = true;
      await this.wait(500);
      this.UserMsgShow30 = true;
      // 都道府県選択へ
      await this.wait(1000);
      this.AdvisorMsgShow100 = true;
      await this.wait(1000);
      this.AdvisorMsgShow101 = true;
      this.AdvloadingView100 = true;
      await this.wait(1000);
      this.QuestionShow100 = true;
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 1300,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
        window.scrollTo({
          top: 1730,
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
      this.UserMsgShow31 = true;
      await this.wait(1000);
      this.UserMsgShow32 = true;
      this.UserloadingView4 = true;
      await this.wait(500);
      this.UserMsgShow33 = true;
      // 都道府県選択へ
      await this.wait(1000);
      this.AdvisorMsgShow100 = true;
      await this.wait(1000);
      this.AdvisorMsgShow101 = true;
      this.AdvloadingView100 = true;
      await this.wait(1000);
      this.QuestionShow100 = true;
      if (this.UserMsgShow2 === true) {
        window.scrollTo({
          top: 1300,
          behavior: "smooth",
        });
      }
      if (this.UserMsgShow5 === true) {
        window.scrollTo({
          top: 1730,
          behavior: "smooth",
        });
      }
    },
    onActive(item) {
      this.colorChange100 = true;
      this.activeItem = item;
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
      await this.wait(1000);
      this.UserMsgShow100 = true;
      await this.wait(1000);
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
