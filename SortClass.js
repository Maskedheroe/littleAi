/** 排序数据类 */
class Sorted {
  constructor(data, compare) {
    this.data = data.slice();
    this.compare = compare || ((a, b) => a - b);
  }
  take() {
    // 考虑到 null 也是可以参与比较的，所以这里返回 null 是不合适的
    if (!this.data.length) return;
    // 记录最小的值
    // 默认第一个位置为最小值
    let min = this.data[0];
    // 记录最小值的位置
    let minIndex = 0;

    // 开始比较数组里面的所有值，找到更小的值，就记录为 min
    // 同时记录最小值，和最小值的位置
    this.data.map((item, index) => this.compare(item, min) < 0 && (min = item) && (minIndex = index))
    this.data[minIndex] = this.data[this.data.length - 1];
    this.data.pop();
    // 最后把最小值输出
    return min;
  }
  give(value) {
    this.data.push(value);
  }
  get length() {
    return this.data.length;
  }
}

function drawBeginAndEnd(begin, end) {
  document.getElementById('begin').innerText = `起点坐标: [${begin[0]}, ${begin[1]}]`
  document.getElementById('end').innerText = `终点坐标: [${end[0]}, ${end[1]}]`
}
