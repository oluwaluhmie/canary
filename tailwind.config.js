/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-sm": "url(/src/assets/footermobile.png)",
        "footer-md": "url(/src/assets/footertab.png)",
        "footer-lg": "url(/src/assets/footerweb.png)",
        productsbg: "url(/src/assets/productsbg.png)",
        businessbg: "url(/src/assets/businessbg.png)",
        investorbg: "url(/src/assets/investorbg.png)",
        guidancebg: "url(/src/assets/guidancebg.png)",
        timelinebg: "url(/src/assets/timelinebg.png)",
        projectimage: "url(/src/assets/projectimage.png)",
        tradeimage: "url(/src/assets/tradeimage.png)",
        contractimage: "url(/src/assets/contractimage.png)",
        capitalimage: "url(/src/assets/capitalimage.png)",
        realestateimage: "url(/src/assets/realestateimage.png)",
        lpoimage: "url(/src/assets/lpoimage.png)",
        invoiceimage: "url(/src/assets/invoiceimage.png)",
        projectweb: "url(/src/assets/projectweb.png)",
        tradeweb: "url(/src/assets/tradeweb.png)",
        contractweb: "url(/src/assets/contractweb.png)",
        capitalweb: "url(/src/assets/capitalweb.png)",
        realestateweb: "url(/src/assets/realestateweb.png)",
        lpoweb: "url(/src/assets/lpoweb.png)",
        invoiceweb: "url(/src/assets/invoiceweb.png)",
        projectwebdark: "url(/src/assets/projectwebdark.png)",
        tradewebdark: "url(/src/assets/tradewebdark.png)",
        contractwebdark: "url(/src/assets/contractwebdark.png)",
        capitalwebdark: "url(/src/assets/capitalwebdark.png)",
        realestatewebdark: "url(/src/assets/realestatewebdark.png)",
        lpowebdark: "url(/src/assets/lpowebdark.png)",
        invoicewebdark: "url(/src/assets/invoicewebdark.png)",
        ctabg: "url(/src/assets/ctabg.png)",
        termsbg: "url(/src/assets/termsbgmain.png)",
        blogbg: "url(/src/assets/blogbgmain.png)",
        policybg: "url(/src/assets/policybgmain.png)",
        contactsbg: "url(/src/assets/contactsbg.png)",
        teamsbg: "url(/src/assets/teamsbg.png)",
        articlebg: "url(/src/assets/articlebg.png)",
        latestbg: "url(/src/assets/latestbg.png)",
        culturebg: "url(/src/assets/culturebg.png)",
        culturepoliciesbg: "url(/src/assets/culturepoliciesbg.png)",
        servicesbgwhite: "url(/src/assets/servicesbgwhite.png)",
        servicesbgblue: "url(/src/assets/servicesbgblue.png)",
        investmentsone: "url(/src/assets/investmentsone.png)",
        investmentstwo: "url(/src/assets/investmentstwo.png)",
        investmentsthree: "url(/src/assets/investmentsthree.png)",
        investmentsfour: "url(/src/assets/investmentsfour.png)",
        investmentsfive: "url(/src/assets/investmentsfive.png)",
        businesspotentialbg: "url(/src/assets/businesspotentialbg.png)",
        loanoffersbg: "url(/src/assets/loanoffersbg.png)",
        financecalculatorbg: "url(/src/assets/financecalculatorbg.png)",
        adminbg: "url(/src/assets/adminbg.png)",
        adminmenubg: "url(/src/assets/adminmenubg.png)",
        "story-sm": "url(/src/assets/storybgmobile.png)",
        "story-md": "url(/src/assets/storybgtab.png)",
        "story-lg": "url(/src/assets/storybg.png)",
        "terms-sm": "url(/src/assets/termsbgmobile.png)",
        "terms-md": "url(/src/assets/termsbgtab.png)",
        "terms-lg": "url(/src/assets/termsbg.png)",
        "policy-sm": "url(/src/assets/policybgmobile.png)",
        "policy-md": "url(/src/assets/policybgtab.png)",
        "policy-lg": "url(/src/assets/policybg.png)",
        "contact-sm": "url(/src/assets/contactusbgmobile.png)",
        "contact-md": "url(/src/assets/contactusbgtab.png)",
        "contact-lg": "url(/src/assets/contactusbg.png)",
        "blog-sm": "url(/src/assets/blogbgmobile.png)",
        "blog-md": "url(/src/assets/blogbgtab.png)",
        "blog-lg": "url(/src/assets/blogbg.png)",
        "cta-sm": "url(/src/assets/ctabgmob.png)",
        "cta-md": "url(/src/assets/ctabgtab.png)",
        "cta-lg": "url(/src/assets/ctabgweb.png)",
        "ctacul-sm": "url(/src/assets/ctamob.png)",
        "ctacul-md": "url(/src/assets/ctatab.png)",
        "ctacul-lg": "url(/src/assets/ctaweb.png)",
        "culture-sm": "url(/src/assets/culturemob.png)",
        "culture-md": "url(/src/assets/culturetab.png)",
        "culture-lg": "url(/src/assets/cultureweb.png)",
        "services-sm": "url(/src/assets/servicesmob.png)",
        "services-md": "url(/src/assets/servicestab.png)",
        "services-lg": "url(/src/assets/servicesweb.png)",
        "investments-sm": "url(/src/assets/investmentsmob.png)",
        "investments-md": "url(/src/assets/investmentstab.png)",
        "investments-lg": "url(/src/assets/investmentsweb.png)",
        "loans-sm": "url(/src/assets/loansmob.png)",
        "loans-md": "url(/src/assets/loanstab.png)",
        "loans-lg": "url(/src/assets/loansweb.png)",
      },
      boxShadow: {
        products: '0 8px 16px -8px rgba(221, 108, 56, 0.6)',
        teams: '0 4px 8px -2px rgba(221, 108, 56, 0.2)',
        blog: '0 4px 16px -8px rgba(96, 96, 98, 0.4)',
        culture: '0 4px 8px -2px rgba(96, 96, 98, 0.1)',
        investment: '0 8px 16px -4px rgba(96, 96, 98, 0.08)',
        loan: '0 2px 8px -2px rgba(96, 96, 98, 0.06)',
        search: '0 12px 16px -4px rgba(96, 96, 98, 0.08)',
        admin: '0 1px 2px 0px rgba(96, 96, 98, 0.08)',
      },
      colors: {
        menuHover: "#DD6C38",
        gradientColor: "#1F2940",
        mobileMenuColor: "#606062",
        textboxBorder: "#CECECE",
        menuTextColor: "#283452",
        menuTextHover: "#FDF8F5",
        searchBoxText: "#B7B7B8",
        borderStroke: "#EFEFEF",
        blueBorderStroke: "#5874B7",
        textColor: "#A9A9AA",
        textHeaderColor: "#F4D1C1",
        footerText: "#989899",
        productsBorder: "#F0BDA5",
        linkHover: "#E99F7E",
        productsText: "#B4C0DF",
        investorBg: "#EEF1F8",
        buttonHover: "#B1562D",
        timelineText: "#CECECE",
        pressText: "#B1562D",
        teamsBg: "#F7F8FB",
        growthBorder: "#FDC62B",
        loyalBorder: "#30BBEC",
        excelBorder: "#3E4095",
        canaryBorder: "#BFEAF9",
        calculatorBorder: "#C9C9CA",
        formBg: "#00BF89",
        adminBorder: "#E7E7E7",
        adminText: "#03121E",
        adminSubtext: "#8E949A",
        tableHeader: "#F7F7F7",
        headerHover: "#FCF0EB",
        countBorder: "#D9D9D9",
        adminPageText: "#A9A9AA",
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
      },
      gap: {
        0.5: "2px",
        1.5: "6px",
        10.5: "42px",
        15.5: "62px",
        22: "88px",
        23: "92px",
        24.5: "98px",
        25: "100px",
        25.5: "102px",
      },
      gradientColorStops: {
        "gradientColor-start": "rgba(31, 41, 64, 0.5)", // 50% opacity
        "gradientColor-end": "rgba(31, 41, 64, 0)", // 0% opacity
        "productsColor-start": "rgba(31, 41, 64, 1)", // 100% opacity
        "productsColor-end": "rgba(31, 41, 64, 1)", // 100% opacity
        "buttonGradient-start": "rgba(237, 153, 50, 1)", //100% opacity
        "buttonGradient-end": "rgba(221, 108, 56, 1)", //100% opacity
        "blueGradient-start": "rgba(68, 152, 210, 1)", //0% opacity
        "blueGradient-end": "rgba(88, 116, 183, 1)", //100% opacity
        "footerGradient-start": "rgba(255, 255, 255, 1)", //100% opacity
        "footerGradient-end": "rgba(244, 209, 193, 1)", //100% opacity
        "blueTextGradient-start": "rgba(40, 52, 82, 1)", //100% opacity
        "blueTextGradient-end": "rgba(88, 116, 183, 1)", //100% opacity
        "orangeTextGradient-start": "rgba(99, 49, 25, 1)", //100% opacity
        "orangeTextGradient-end": "rgba(221, 108, 56, 1)", //100% opacity
        "blueButton-start": "rgba(88, 116, 183, 1)", //100% opacity
        "blueButton-end": "rgba(70, 93, 146, 1)", //100% opacity
        "productsHover-start": "rgba(253, 248, 245, 1)", //100% opacity
        "productsHover-end": "rgba(250, 233, 225, 1)", //100% opacity
        "linkOrangeButtonText-start": "rgba(253, 198, 43, 1)", //100% opacity
        "linkOrangeButtonText-end": "rgba(221, 108, 56, 1)", //100% opacity
        "linkBlueButtonText-start": "rgba(48, 187, 236, 1)", //100% opacity
        "linkBlueButtonText-end": "rgba(88, 116, 183, 1)", //100% opacity
        "ctaGradient-start": "rgba(96, 96, 98, 0.2)", //100% opacity
        "ctaGradient-end": "rgba(255, 255, 255, 0.3)", //100% opacity
        "timelineText-start": "rgba(99, 49, 25, 1)", //100% opacity
        "timelineText-end": "rgba(221, 108, 56, 1)", //100% opacity
        "productsBg-start": "rgba(253, 248, 245, 1)", //100% opacity
        "productsBg-end": "rgba(253, 248, 245, 1)", //100% opacity
        "loansOffers-start": "rgba(238, 241, 248, 1)", //100% opacity
        "loansOffers-end": "rgba(230, 234, 244, 1)", //100% opacity
        "orangeButton-start": "rgba(221, 108, 56, 1)", //100% opacity
        "orangeButton-end": "rgba(177, 86, 45, 1)", //100% opacity
      },
      height: {
        9.5: "38px",
        13: "52px",
        15.5: "62px",
        17.5: "70px",
        18: "72px",
        19: "76px",
        19.5: "78px",
        20.5: "80px",
        21: "84px",
        21.5: "86px",
        22: "88px",
        22.5: "90px",
        25: "100px",
        30: "120px",
        32.5: "130px",
        33: "132px",
        34: "136px",
        34.5: "138px",
        35: "140px",
        35.0875: "140.35px",
        37: "147px",
        38.5: "154px",
        42: "168px",
        43: "172px",
        45: "180px",
        49: "196px",
        50: "200px",
        54: "216px",
        55: "220px",
        55.5: "222px",
        60: "240px",
        61: "244px",
        62: "248px",
        63: "252px",
        65: "260px",
        66: "264px",
        68: "272px",
        70.5: "282px",
        71: "284px",
        74.5: "298px",
        75: "300px",
        76: "304px",
        77.5: "310px",
        78: "312px",
        82: "328px",
        84: "336px",
        86: "344px",
        86.5: "346px",
        89: "356px",
        89.5: "358px",
        90: "360px",
        91: "364px",
        93: "372px",
        94: "376px",
        95: "380px",
        100: "400px",
        112: "448px",
        116: "464px",
        128: "512px",
        130: "520px",
        131: "524px",
        132: "528px",
        136: "544px",
        139.5: "558px",
        150: "600px",
        153: "612px",
        154: "616px",
        160: "640px",
        168: "672px",
        169: "676px",
        170: "680px",
        180: "720px",
        184: "736px",
        188: "752px",
        190: "760px",
        200: "800px",
      },
      margin: {
        22.5: "90px",
        25: "100px",
        34: "136px",
        34.5: "138px",
        35: "140px",
        50: "200px",
        51: "204px",
        52: "208px",
        59: "236px",
        62: "248px",
        63: "252px",
        70: "280px",
        75: "300px",
        82: "328px",
        84: "336px",
        86: "344px",
        89.5: "358px",
        90: "360px",
        93: "372px",
        98: "392px",
        105: "420px",
        110: "440px",
        125: "500px",
        126: "504px",
        127: "508px",
        128: "512px",
        132: "528px",
        150: "600px",
        160: "640px",
        164: "656px",
        165: "660px",
        170: "680px",
        172: "688px",
        173: "692px",
        180: "720px",
        182: "728px",
        184: "736px",
        188: "752px",
        200: "800px",
        202: "808px",
        203: "812px",
        204: "816px",
        210: "840px",
      },
      minWidth: {
        300: "1200px",
      },
      maxWidth: {
        107.5: "460px",
        160: "640px",
      },
      padding: {
        17: "68px",
        20: "80px",
        20.75: "83px",
        25: "100px",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
      },
      width: {
        4.1025: "16.41px",
        11.6675: "46.67px",
        18: "72px",
        23: "92px",
        25: "100px",
        29: "116px",
        30: "120px",
        31: "124px",
        31.25: "125px",
        33: "132px",
        33.5: "134px",
        34: "136px",
        35.25: "141px",
        37.5: "150px",
        38: "152px",
        38.25: "153px",
        38.4275: "153.71px",
        41.5: "166px",
        43: "172px",
        43.25: "173px",
        43.5: "174px",
        45.75: "183px",
        46.25: "185px",
        47.25: "189px",
        47.75: "191px",
        48.25: "193px",
        49.75: "199px",
        50: "200px",
        53.63: "214.52px",
        54.75: "219px",
        55.75: "223px",
        56.25: "225px",
        56.5: "226px",
        57: "228px",
        58: "232px",
        59: "236px",
        61.5: "246px",
        62: "248px",
        62.75: "251px",
        63: "252px",
        66: "264px",
        67: "268px",
        68: "272px",
        69: "276px",
        70.25: "281px",
        73: "292px",
        74: "296px",
        75: "300px",
        76: "304px",
        76.5: "306px",
        77: "308px",
        78: "312px",
        79.5: "318px",
        83: "332px",
        84: "336px",
        85: "340px",
        86: "344px",
        86.5: "346px",
        87.5: "350px",
        88: "352px",
        90: "360px",
        96.6675: "386.37px",
        97.5: "390px",
        98: "392px",
        99.5: "398px",
        100: "400px",
        106: "424px",
        106.5: "426px",
        107.5: "430px",
        110: "440px",
        112: "448px",
        116: "464px",
        120: "480px",
        126.5: "506px",
        128: "512px",
        134: "536px",
        135: "540px",
        135.5: "542px",
        138: "552px",
        138.9375: "555.75px",
        139: "556px",
        142: "568px",
        144: "576px",
        145: "580px",
        146: "584px",
        147: "588px",
        148.5: "594px",
        150: "600px",
        154: "616px",
        158: "632px",
        160: "640px",
        166: "664px",
        176: "704px",
        190: "760px",
        192: "768px",
        199: "796px",
        200: "800px",
        202.75: "811px",
        234: "936px",
        240: "960px",
        256: "1024px",
        300: "1200px",
        321.5: "1286px",
        341.5: "1366px",
        480: "1920px",
      },
    },
  },
  plugins: [],
};
