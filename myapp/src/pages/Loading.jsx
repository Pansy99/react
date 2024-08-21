import React, { useState, useEffect } from'react';

function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 模拟加载进度
    let interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div>
      <h2>加载进度：{progress}%</h2>
    </div>
  );
}

export default Loading;