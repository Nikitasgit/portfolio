import React from "react";
import { motion } from "framer-motion";
const FirstLine = () => {
  return (
    <svg
      className="victor-svg"
      width="535"
      height="1005"
      viewBox="0 0 535 1005"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M514 1C544.167 16.6667 567.556 109.829 380 323.5C143 593.5 282.5 582.5 338.5 593.5C349 595.562 338.5 608 375.5 600.5C431.5 581 447 576.5 453 684.5C445 661 341.5 641.5 341.5 679.5C341.5 694 388.493 703.02 394 686.5C395 683.5 384.307 674.325 376.5 683C368.897 691.448 387.342 694.543 403.5 689.272C410 687.152 416 685.635 403.5 681.346C375.016 671.573 331.888 691.735 359 731.5C365.818 741.5 378.5 755 363 755C357 755 347.7 756.7 348.5 765.5C361.167 763.5 390.1 763.8 404.5 781C423 783 493 728 476 665.5C472.464 652.5 448 673 442 825C441.507 837.5 439.5 850 455.5 860.5C487.5 881.5 383.5 972 351 1003.5V926.5C343.5 923.5 330.1 910.7 336.5 883.5C324 856.5 313.5 817.5 336.5 810.5C352 810.5 380.9 803.2 388.5 788L348.5 793L344 796.5L338.5 794C326.667 796.167 302 799.4 298 795C313 791.5 324.5 775 341.5 784C336.3 772.8 338.333 767 340 765.5L334 693C334 687.5 335.5 681 318.5 681C288.5 681 276.209 681 283.694 694.5C287.793 701.894 302.5 698.523 302.5 692C302.5 685.5 288.7 686.7 279.5 691.5C262.5 699 289.2 700.2 304 699C308.667 698.333 317.4 696.8 315 696C312 693 303.5 674.5 267.5 696C251 705.854 238 707.5 246.5 685.5C250.5 677.5 254 665 285.5 666.5C293.833 667.333 311.2 669.8 314 673C307.333 667.167 295 647.4 299 615C312.5 609 352 593.5 308.5 597.5C301.5 598.144 275 593 256.5 584C228 612 216 684.5 246.5 765.5C233.478 744.167 209.747 695.8 219 673C211 643 196 636 195.5 562C203.1 553.6 206.667 555.167 207.5 557C230.333 526.333 287.7 469.5 334.5 487.5C370.5 470 421.5 502.5 482 584C473.2 591.6 474.333 601.833 476 606C478.4 612 481.929 630 465.5 676C463 683 455.5 740.5 455.5 762C455.5 848 336.5 933 274 837C279.333 874.167 267.6 942.8 178 920C88.4 897.2 22.6667 927.5 1 945.5"
        stroke="#DBDBDB"
        strokeLinejoin="round"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 6 }}
      />
    </svg>
  );
};

export default FirstLine;