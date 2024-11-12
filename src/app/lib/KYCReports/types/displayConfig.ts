import * as TinVerification from "./verifications/tinVerification";
import * as PhoneCarrierVerification from "./verifications/phoneCarrier";
import * as DatabaseVerification from "./verifications/databaseVerification";
import * as DatabaseStandardVerification from "./verifications/databaseStandardVerification";
import * as GovernmentIdVerification from "./verifications/governmentId";
import * as SelfieVerification from "./verifications/selfieVerification";

import * as WatchList from "./reports/watchListReport";
import * as AddressLook from "./reports/addressLookUpReport";
import * as AdverseMediaReport from "./reports/adverseReport";
import * as EmailReport from "./reports/emailReport";
import * as PepReport from "./reports/pepReport";
import * as PhoneRiskReport from "./reports/phoneRiskReport";
import * as SocialMediaReport from "./reports/socialMediaReport";

export const displayConfig = {
  ...TinVerification.displayConfig,
  ...PhoneCarrierVerification.displayConfig,
  ...DatabaseVerification.displayConfig,
  ...DatabaseStandardVerification.displayConfig,
  ...GovernmentIdVerification.displayConfig,
  ...SelfieVerification.displayConfig,
  ...GovernmentIdVerification.displayConfig,

  //   Reports
  ...WatchList.displayConfig,
  ...AddressLook.displayConfig,
  ...AdverseMediaReport.displayConfig,
  ...EmailReport.displayConfig,
  ...PepReport.displayConfig,
  ...PhoneRiskReport.displayConfig,
  ...SocialMediaReport.displayConfig,
};
