// 0x01988ac7a73c06092a2C62f4190cf31323Fba51e

export const formatAdress = (address: string) => {
  const addressArr: any = address.split("")
  const firstFive = addressArr.splice(0,5).join('')
  const lastFive = addressArr.splice(addressArr.length - 5).join("");

  return `${firstFive}...${lastFive}`;
};
