function setProgress(percent) {
  const circle = document.querySelector(".progress-fill");
  const text = document.querySelector(".progress-text");
  const circumference = 2 * Math.PI * 40; // 圓周長度
  const offset = circumference * (1 - percent / 100);

  circle.style.strokeDashoffset = offset;
  text.textContent = percent + "%";
}

// 測試不同百分比
setProgress(75);
