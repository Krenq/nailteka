/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: 'full',
        sm: 'full',
        lg: 'full',
        xl: 'full',
      },
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      // Example   -----> '.2x10': { max: '1900px' },
    },

    extend: {
      spacing: {
        '3px': '3px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '22px': '22px',
        '23px': '23px',
        '25px': '25px',
        '26px': '26px',
        '27px': '27px',
        '29px': '29px',
        '30px': '30px',
        '34px': '34px',
        '34.5px': '34.5px',
        '38px': '38px',
        '41px': '41px',
        '42px': '42px',
        '43px': '42.5px',
        '47px': '47px',
        '50px': '50px',
        '52px': '52px',
        '54px': '54px',
        '55px': '55px',
        '60px': '60px',
        '62px': '62px',
        '63px': '63px',
        '65px': '65px',
        '66px': '66px',
        '68px': '68px',
        '69px': '69px',
        '70px': '70px',
        '72px': '72px',
        '73px': '73px',
        '76px': '76px',
        '77px': '77px',
        '80px': '80px',
        '83px': '83px',
        '82px': '82px',
        '84px': '84px',
        '86px': '86px',
        '87px': '87px',
        '90px': '90px',
        '92px': '92px',
        '94px': '94px',
        '100px': '100px',
        '103px': '103px',
        '104px': '104px',
        '109px': '109px',
        '110px': '110px',
        '111px': '111px',
        '112px': '112px',
        '115px': '115px',
        '120px': '120px',
        '122px': '122px',
        '124px': '124px',
        '129px': '129px',
        '130px': '130px',
        '132px': '132px',
        '133px': '133px',
        '135px': '135px',
        '146px': '146px',
        '150px': '150px',
        '152px': '152px',
        '153px': '153px',
        '154px': '154px',
        '156px': '156px',
        '158px': '158px',
        '159px': '159px',
        '164px': '164px',
        '169px': '169px',
        '172px': '172px',
        '176px': '176px',
        '178px': '178px',
        '180px': '180px',
        '183px': '183px',
        '187px': '187px',
        '195px': '195px',
        '196px': '196px',
        '198px': '198px',
        '200px': '200px',
        '204px': '204px',
        '218px': '218px',
        '220px': '220px',
        '222px': '222px',
        '230px': '230px',
        '233px': '233px',
        '237px': '237px',
        '238px': '238px',
        '246px': '246px',
        '249px': '249px',
        '250px': '250px',
        '257px': '257px',
        '272px': '272px',
        '276px': '276px',
        '278px': '278px',
        '280px': '280px',
        '300px': '300px',
        '305px': '305px',
        '308px': '308px',
        '310px': '310px',
        '312px': '312px',
        '317px': '317px',
        '328px': '328px',
        '330px': '330px',
        '338px': '338px',
        '345px': '345px',
        '350px': '350px',
        '387px': '387px',
        '330px': '330px',
        '332px': '332px',
        '379px': '379px',
        '336px': '336px',
        '360px': '360px',
        '380px': '380px',
        '384px': '384px',
        '388px': '388px',
        '390px': '390px',
        '400px': '400px',
        '410px': '410px',
        '423px': '423px',
        '416px': '416px',
        '420px': '420px',
        '428px': '428px',
        '440px': '440px',
        '444px': '444px',
        '448px': '448px',
        '460px': '460px',
        '474px': '474px',
        '475px': '475px',
        '476px': '476px',
        '478px': '478px',
        '488px': '488px',
        '492px': '492px',
        '500px': '500px',
        '502px': '502px',
        '531px': '531px',
        '550px': '550px',
        '566px': '566px',
        '572px': '572px',
        '600px': '600px',
        '608px': '608px',
        '660px': '660px',
        '664px': '664px',
        '710px': '710px',
        '717px': '717px',
        '727px': '727px',
        '760px': '760px',
        '768px': '768px',
        '790px': '790px',
        '800px': '800px',
        '840px': '840px',
        '870px': '870px',
        '874px': '874px',
        '910px': '910px',
        '1000px': '1000px',
        '1060px': '1060px',
        '1100px': '1100px',
        '1440px': '1440px',
        '1480px': '1480px',
        '1505px': '1505px',
        '1760px': '1760px',
        '1816px': '1816px',
        '1920px': '1920px',
        '4.2%': '4.2%',
        '4.5%': '4.5%',
        '5%': '5%',
        '10%': '10%',
        '13.1%': '13.1%',
        '15.42%': '15.42%',
        '19.6%': '19.6%',
        '20%': '20%',
        '22%': '22%',
        '28.8%': '28.8%',
        '29.82%': '29.82%',
        '29.3%': '29.3%',
        '30%': '30%',
        '32%': '32%',
        '34%': '34%',
        '35%': '35%',
        '36%': '36%',
        '39.5%': '39.5%',
        '40%': '40%',
        '43%': '43%',
        '44%': '44%',
        '46%': '46%',
        '46.39%': '46.39%',
        '48.5%': '48.5%',
        '50%': '50%',
        '57.5%': '57.5%',
        '60%': '60%',
        '64%': '64%',
        '65%': '65%',
        '76%': '76%',
        '96%': '96%',
        '91.7%': '91.7%',
        '110%': '110%',
        '120%': '120%',
        '124%': '124%',
        '126%': '126%',
        '150%': '150%',
        '200%': '200%',
      },
      fontSize: {
        0: '0px',
        '4px': '4px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '16px': '16px',
        '18px': '18px',
        '22px': '22px',
        '26px': '26px',
        '32px': '32px',
        '38px': '38px',
        '52px': '52px',
        '5vw': '1.8vw',
      },

      maxWidth: {
        '36px': '36px',
        '60px': '60px',
        '180px': '180px',
        '228px': '228px',
        '252px': '252px',
        '278px': '278px',
        '280px': '280px',
        '350px': '350px',
        '450px': '450px',
        '475px': '475px',
        '500px': '500px',
        '664px': '664px',
        '1440px': '1440px',
        '1460px': '1460px',
        '1505px': '1505px',
        '1600px': '1600px',
        '1760px': '1760px',
        '15.65%': '15.65%',
      },
      maxHeight: {
        '21px': '21px',
        '159px': '159px',
        '228px': '228px',
        '262px': '262px',
        '305px': '305px',
        '586px': '586px',
        '727px': '727px',
        '760px': '760px',
        '768px': '768px',
        '1100px': '1100px',
      },
      minHeight: {
        '42px': '42px',
        '60px': '60px',
        '159px': '159px',
        '164px': '164px',
        '250px': '250px',
        '317px': '317px',
        '330px': '330px',
      },
      minWidth: {
        '36px': '36px',
        '60px': '60px',
        '176px': '176px',
        '180px': '180px',
        '195px': '195px',
        '310px': '310px',
        '475px': '475px',
        '120%': '120%',
      },
      borderRadius: {
        '3px': '3px',
        '20px': '20px',
        '32px': '32px',
        '56px': '56px',
      },
      borderWidth: {
        '0.5px': '0.5px',
        '1.5px': '1.5px',
        '3.5px': '3.5px',
        '3px': '3px',
        '9px': '9px',
      },
      lineHeight: {
        '100%': '100%',
        '120%': '120%',
        '124%': '124%',
        '130%': '130%',
        '140%': '140%',
        '150%': '150%',
        '160%': '160%',
        '170%': '170%',
      },
      zIndex: {
        80: '80',
        100: '100',
        110: '110',
      },
      letterSpacing: {
        '1px': '1px',
        '2px': '2px',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
    },
  },
};