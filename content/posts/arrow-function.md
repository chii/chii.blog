---
title: Arrow Function
published: 2021-02-25
---
## アロー関数の書き方
### 一般的な関数の定義
```js
function a(name) {
    return 'I am ' + name;
}
```
### 関数式にすると
（この場合、関数名が定義されないので無名関数と言われる）
```js
const a = function(name){
    return 'I am ' + name;
}
```
### アロー関数にすると
```js
const a = (name) => {
    return 'I am ' + name;
}
```
functionを削除して、()と{}の間に=>を記載するとアロー関数の出来上がり。

**引数が1つの場合には()を省略できる**
```js
const a = name => {
    return 'I am ' + name;
}
```
**実行行が1行の場合には{}とreturnが省略出来る**
```js
const a = name => 'I am ' + name;
```
name => 'I am ' + name; の部分がアロー関数で、

name => 'I am ' + name; の部分が**変数a（const a）に代入**されることとなる。

### 実行
```js
a();
```
```js
console.log(a('Dustin Johnson'));
```
**引数が1つ以上の場合と引数なしの場合**

**引数が1つ以上の場合**は()を省略出来ないので
```js
const b = (name, name1) => 'I am ' + name + ' and he is ' + name1
```
となり、b('Dustin Johnson', 'Rory McIlroy')の様に引数入れて実行

**引数が無い場合**も省略出来ないので、
```js
const b = () => 'Word!';
```
となる。

()の代わりに _ にすることも可能。（だが、()を使用する方が良い）
```js
const b = _ => 'Word!';
```
