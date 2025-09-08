import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { getCurrentModuleType } from "helper-functions/getCurrentModuleType";
import { ModuleTypes } from "helper-functions/moduleTypes";
import { CustomStackFullWidth } from "styled-components/CustomStyles.style";
import ManageSearch from "../header/second-navbar/ManageSearch";
import TrackParcelFromHomePage from "../parcel/TrackParcelFromHomePage";
import { useSelector } from "react-redux";

const SearchWithTitle = (props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const moduleType = getCurrentModuleType();
  const { zoneid, token, searchQuery, name, query, currentTab } = props;
  const { configData } = useSelector((state) => state.configData);

  const getBannerTexts1 = t("Get your car rental service with")
  const getBannerSubTexts = t("with affordable price.")

  const getBannerTexts = () => {
    switch (getCurrentModuleType()) {
      case ModuleTypes.GROCERY:
        return {
          title: "Tamam is your everyday grocery hero",
          subTitle: "From fridge to front door — fast and easy",
        };
      case ModuleTypes.PHARMACY:
        return {
          title: "Tamam makes medicine simple",
          subTitle: "Get what you need — fast, safe, and stress-free",
        };
      case ModuleTypes.ECOMMERCE:
        return {
          title: "Your style. Your quality. Your Tamam",
          subTitle: "High-quality products for every need",
        };
      case ModuleTypes.FOOD:
        return {
          title: "Crave It. Tamam It. Enjoy It",
          subTitle: "Where Hunger Meets Happiness",
        };
      case ModuleTypes.PARCEL:
        return {
          title: "Tamam delivers what matters most",
          subTitle: "Quick, easy, fully tracked",
        };
      case ModuleTypes.RENTAL:
        return {
          title: "Tamam puts you in the driver’s seat",
          subTitle: `Book in minutes. Drive with confidence`,
        };
      default:
        return {
          title: "",
          subTitle: "",
        };
    }
  };

  return (
    <CustomStackFullWidth
      alignItems="center"
      justifyContent="center"
      spacing={isSmall ? 1 : 3}
      p={isSmall ? "25px" : "20px"}
      mt={ModuleTypes.RENTAL === "rental" ? { xs: 0, sm: 2 } : 0}
    >
      <CustomStackFullWidth
        alignItems="center"
        justifyContent="center"
        spacing={1.5}
      >
        <Typography
          variant={isSmall ? "h6" : "h5"}
          textAlign="center"
          fontWeight="600"
          lineHeight="33.18px"
          component="h1"
          sx={{
            fontSize: {
              md: ModuleTypes.RENTAL === "rental" && "30px !important",
            },
            textTransform:
              ModuleTypes.RENTAL === "rental" ? "capitalize" : "initial",
          }}
        >
          {t(getBannerTexts().title)}
        </Typography>
        <Typography
          variant={isSmall ? "subtitle2" : "subtitle1"}
          textAlign="center"
          sx={{ color: (theme) => theme.palette.neutral[400] }}
          fontWeight="400"
          lineHeight="18.75px"
          component="p"
        >
          {t(getBannerTexts().subTitle)}
        </Typography>
      </CustomStackFullWidth>

      {moduleType === "parcel" ? (
        <TrackParcelFromHomePage />
      ) : moduleType === "rental" ? null : (
        <ManageSearch
          zoneid={zoneid}
          token={token}
          maxwidth="false"
          fullWidth
          searchQuery={searchQuery}
          name={name}
          query={query}
          currentTab={currentTab}
        />
      )}
    </CustomStackFullWidth>
  );
};

export default SearchWithTitle;
