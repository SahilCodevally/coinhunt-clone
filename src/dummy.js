class Coin {
  constructor(
    id,
    name,
    marketCap,
    launchTime,
    totalVotes,
    todayVotes,
    voted,
    image
  ) {
    this.id = id;
    this.name = name;
    this.marketCap = marketCap;
    this.launchTime = launchTime;
    this.totalVotes = totalVotes;
    this.todayVotes = todayVotes;
    this.voted = voted;
    this.image = image;
  }
}

export const dummyCoins = [
  new Coin(
    "abc123",
    "abc",
    12345,
    new Date(2020, 11, 24),
    45683,
    658,
    false,
    "https://i.ibb.co/k3kPBHW/GfpWshZ.jpg"
  ),
  new Coin(
    "def123",
    "def",
    45678,
    new Date(2021, 4, 11),
    2510,
    314,
    false,
    "https://i.resmim.net/i/1621294755381.png"
  ),
  new Coin(
    "ghi123",
    "ghi",
    78912,
    new Date(2020, 6, 19),
    9540,
    745,
    false,
    "https://i.ibb.co/z5Tcj2t/coingeckologo.png"
  ),
  new Coin(
    "jkl123",
    "jkl",
    32165,
    new Date(2021, 3, 1),
    6542,
    445,
    false,
    "https://img1.wsimg.com/isteam/ip/b236ab01-2fad-4287-943d-bc86f5def1f6/WhatsApp%20Image%202021-05-16%20at%2013.01.56.jpeg/:/rs=w:984,h:984"
  ),
  new Coin(
    "mno123",
    "mno",
    65498,
    new Date(2021, 4, 19),
    1591,
    1591,
    false,
    "https://www.elonstonk.net/uploads/1/3/7/5/137575129/published/logo.png?1621273433"
  ),
  new Coin(
    "pqr123",
    "pqr",
    98732,
    new Date(2020, 10, 30),
    10520,
    458,
    false,
    "https://i.ibb.co/0jXN8qH/naruto-coin-aa.png"
  ),
  new Coin(
    "stu123",
    "stu",
    159753,
    new Date(2019, 0, 5),
    63874,
    1369,
    false,
    "https://safejupiter.space/wp-content/uploads/2021/05/SafeJupiter-Square.png"
  ),
  new Coin(
    "vwx123",
    "vwx",
    951357,
    new Date(2021, 1, 17),
    12684,
    584,
    false,
    "https://www.poodlemoon.dog/images/logo.png"
  ),
  new Coin(
    "yz123",
    "yz",
    753456,
    new Date(2021, 2, 23),
    7643,
    263,
    false,
    "https://miro.medium.com/max/32/1*SiDoud10onmUDaBEE7UgzA.png"
  ),
];

export const dummyPromotedCoins = [
  new Coin(
    "abc123",
    "abc",
    12345,
    new Date(2020, 11, 24),
    45683,
    658,
    false,
    "https://i.ibb.co/k3kPBHW/GfpWshZ.jpg"
  ),
  new Coin(
    "jkl123",
    "jkl",
    32165,
    new Date(2021, 3, 1),
    6542,
    445,
    false,
    "https://img1.wsimg.com/isteam/ip/b236ab01-2fad-4287-943d-bc86f5def1f6/WhatsApp%20Image%202021-05-16%20at%2013.01.56.jpeg/:/rs=w:984,h:984"
  ),
  new Coin(
    "pqr123",
    "pqr",
    98732,
    new Date(2020, 10, 30),
    10520,
    458,
    false,
    "https://i.ibb.co/0jXN8qH/naruto-coin-aa.png"
  ),
  new Coin(
    "stu123",
    "stu",
    159753,
    new Date(2019, 0, 5),
    63874,
    1369,
    false,
    "https://safejupiter.space/wp-content/uploads/2021/05/SafeJupiter-Square.png"
  ),
  new Coin(
    "yz123",
    "yz",
    753456,
    new Date(2021, 2, 23),
    7643,
    263,
    false,
    "https://miro.medium.com/max/32/1*SiDoud10onmUDaBEE7UgzA.png"
  ),
];
