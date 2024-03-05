import React, { useState } from "react";
import { motion, useTime } from "framer-motion";
const Loading = () => {
  const [path, setPath] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPath(1);
    }, 5000);
  }, []);
  return (
    <div className="loading-container">
      <div className="icon-loading">
        <svg
          width="98"
          height="98"
          viewBox="0 0 98 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="49"
            cy="49"
            r="48"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path
            d="M19.8324 87.3541C19.2613 79.6276 20.3765 65.8239 24.5464 52.6746M22.3588 28.3301C21.4401 31.0861 24.1961 14.3206 37.7464 6.51195C35.909 9.45167 34.6962 14.933 34.3195 17.3062M22.3588 28.3301C22.7953 27.0207 27.5869 22.2375 34.3195 17.3062M22.3588 28.3301C21.5962 31.8288 20.8389 38.8097 22.0387 45.3253M34.3195 17.3062C41.7569 11.8586 51.563 6.23029 60.4833 4.9043C59.0586 5.80488 57.6811 6.73518 56.3492 7.69248M24.5464 52.6746C23.3132 50.4683 22.5191 47.9341 22.0387 45.3253M24.5464 52.6746C24.9805 51.3057 25.4502 49.9263 25.9576 48.5407M22.0387 45.3253L28.4734 42.3397M28.4734 42.3397C34.0372 29.8895 42.8412 17.4018 56.3492 7.69248M28.4734 42.3397C27.5473 44.4121 26.7109 46.4834 25.9576 48.5407M56.3492 7.69248C66.9904 10.6674 86.022 23.8287 77.0191 52.6746C79.7751 55.4306 81.2296 62.0909 81.6124 65.0765L89.1913 74.4928C81.5178 65.7961 64.3004 48.63 54.2822 46.4507M52.9043 46.244C47.1626 52.6746 31.853 54.7416 25.9576 48.5407M52.9043 46.244C53.3461 46.2774 53.8061 46.3471 54.2822 46.4507M52.9043 46.244C55.2009 44.3301 59.1052 38.0679 56.3492 28.3301M54.2822 46.4507C53.8995 55.1091 55.5224 76.6517 65.0765 93.555"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0.5 }}
            transition={{
              duration: 5,
              repeat: "infinity",
              repeatType: "reverse",
            }}
          />
          <path
            d="M44.6362 35.4497C44.6362 37.606 42.8882 39.354 40.7319 39.354C38.5757 39.354 36.8276 37.606 36.8276 35.4497C36.8276 33.2934 38.5757 31.5454 40.7319 31.5454C42.8882 31.5454 44.6362 33.2934 44.6362 35.4497Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="loading-line-container">
        <svg
          width="1075"
          height="1"
          viewBox="0 0 1075 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            y1="0.5"
            x2="1075"
            y2="0.5"
            stroke="black"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 5,

              repeat: "infinity",
              repeatType: "mirror",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
