'use strict'
console.error('\n=====RUN-TEST-CDPSTAKETX-START=====\n')

var { WaykiTransaction, Wallet } = require("../index")
var wallet = new Wallet("Y6J4aK6Wcs4A3Ex4HXdfjJ6ZsHpNZfjaS4B9w7xqEnmFEYMqQd13")

/*
Build a transaction for cdp stake transaction
note:
1, nValidHeight: the height of the block when creating the signature, and the height difference when submitting the broadcast transaction must be <=250
2, fees: handling fee when deploying a smart contract, >= 1000000 sawi (0.01 wicc)
3. The same transaction cannot be submitted repeatedly before it is confirmed(BPS=0.1). It is recommended to solve the problem of batch initiated transaction by adding random handling fee.
5、feeSymbol:fee symbol（WICC/WUSD）
6、sCoinToMint:get coin amount
7、assetAmount:stake coin amount
8、assetAmount:stake coin symbol
9、sCoinSymbol:get coind symbol
*/
/*
构建cdp抵押交易
注意：
1、nValidHeight:创建签名时的区块高度,与提交广播交易时的高度差必须 <=250
2、fees:发布合约时的手续费, >= 1000000 sawi(0.01 wicc)
3、相同的交易在未被确认前不能重复提交(BPS=0.1),建议采用添加随机手续费方式解决批量发起交易问题
4、cdpTxId:cdp创建生成的交易hash
5、feeSymbol:小费类型（WICC/WUSD）
6、sCoinToMint:获得的wusd
7、assetAmount:抵押的数量(最低1WICC)
8、assetAmount:抵押币种
9、sCoinSymbol:获得币种
*/
var assetSymbol = "WICC"
var assetAmount = 100000000
var map = new Map([[assetSymbol, assetAmount]])
var cdpStakeTxinfo = {
  nTxType: 21,
  nValidHeight: 25,
  srcRegId: "0-1",// sender's regid
  fees: 1000000,
  feeSymbol: "WICC",
  cdpTxId: "0b9734e5db3cfa38e76bb273dba4f65a210cc76ca2cf739f3c131d0b24ff89c1",
  assetMap: map,
  sCoinSymbol: "WUSD",
  sCoinToMint: 0
};


var transaction = new WaykiTransaction(cdpStakeTxinfo, wallet)
var cdpStakeTx = transaction.genRawTx()

console.log("----cdpStakeTx----", cdpStakeTx)

console.error('\n=====RUN-TEST-CDPSTAKETX-END=====\n')