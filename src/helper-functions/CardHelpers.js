import { store } from "redux/store";

// export const getAmountWithSign = (amount, needDecimal = true) => {
//   const stores = store?.getState();
//   const { configData } = stores?.configData || {};
//   let newAmount = needDecimal
//     ? ((amount * 100) / 100).toFixed(
//         Number.parseInt(configData?.digit_after_decimal_point)
//       )
//     : (amount * 100) / 100;
//   if (configData?.currency_symbol_direction === "left") {
//     return `${configData?.currency_symbol}${newAmount}`;
//   } else if (configData?.currency_symbol_direction === "right") {
//     return `${newAmount}${configData?.currency_symbol}`;
//   }
//   return amount;
// };

export const getAmountWithSign = (amount, needDecimal = true) => {
  if (amount == null || isNaN(Number(amount))) return "";

  const { configData } = store?.getState()?.configData || {};
  const decimals = configData?.digit_after_decimal_point ?? 2;
  const symbol = configData?.currency_symbol || "";
  const direction = configData?.currency_symbol_direction || "left";

  // Function to format number with or without decimals
  const formatNumber = (num) => {
    return needDecimal ? num.toFixed(decimals) : Math.floor(num);
  };

  // Format the amount
  const formattedAmount = formatNumber(Number(amount));

  // Return amount with currency symbol
  return direction === "left" ? `${symbol}${formattedAmount}` : `${formattedAmount}${symbol}`;
};



export const getDiscountedAmount = (
  price,
  discount,
  discountType,
  storeDiscount,
  quantity
) => {
  //product wise discount
  let mainPrice = price;
  let q = quantity ? quantity : 1;
  if (discount > 0) {
    if (discountType === "amount") {
      mainPrice = price - discount * q;
    } else if (discountType === "percent" || discountType === "fixed") {
      mainPrice = price - (discount / 100) * price;
    }
  }
  
  return mainPrice;
};
export const getSelectedAddOn = (add_ons) => {
  let add_on = "";
  if (add_ons?.length > 0) {
    add_ons?.map((item, index) => {
      if (item?.isChecked) {
        add_on += `${index !== 0 ? ", " : ""}${item.name}`;
      }
    });
  }
  return add_on;
};

// export const getDiscountAmount = (
//   price,
//   discount,
//   discountType,
//   storeDiscount
// ) => {
//   //product wise discount
//   let mainPrice = price;
//
//   if (Number.parseInt(storeDiscount) === 0) {
//     if (discountType === "amount") {
//       mainPrice = discount;
//     } else if (discountType === "percent") {
//       mainPrice = price * (discount / 100);
//     }
//   } else {
//     if (discountType === "amount" || discountType === "fixed") {
//       mainPrice = storeDiscount;
//       console.log({ mainPrice });
//     } else if (discountType === "percent") {
//       mainPrice = price * (storeDiscount / 100);
//     }
//   }
//   return mainPrice;
// };
export const getReferDiscount = (
  totalAmountForRefer,
  refDiscount,
  refPercentage
) => {
  if (refPercentage === "percentage") {
    return (refDiscount / 100) * totalAmountForRefer;
  } else {
    return refDiscount;
  }
};
