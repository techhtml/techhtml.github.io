'use strict';

// variable (변수)
var age = 30;

var getAge = function() { }

var choeun = {}

// 원시타입

// 숫자, 문자열, 불리언, null, undefined,

// 숫자 : 10, 20, 30
// 자바스크립트 숫자 : 64비트 부동소수점
// NaN (Not a Number), Infinity (무한대)

// 문자열 (String)
// "조은은 배고프다";
// "치킨은 맛있다";

var msg = "choeun very hungry";
var msg2 = msg.toUpperCase(); // "CHOEUN VERY HUNGRY";

// 불리언
// true, false

// null과 undefined
// 그릇 (변수)
// null : 그릇 (준비)
// undefined : 그릇 없음

// null과 undefined

// 변수의 스코프
// 전역, 지역
// 전역 : global
// 지역 : local
// {}
// 함수를 단위로 스코프를 끊음

var choeun = "잘생겼다"; // 글로벌
function eat() {
  var chicken = "굽네치킨"; // 지역
  console.log(chicken);
  function eateat() {
    var moo = "치킨무";
    console.log(chicken); // 굽네치킨?
    console.log(moo); // 치킨무
  }
  return eateat; // 클로저
}
var eateat = eat();
eateat();


/**
 * 정진님
 */

 /**
  * 조은, 남훈, 성진, 형주, 현묵, 상규,
  * 진경, 남경, 해진, 영화, 승철, 봉재
  */
