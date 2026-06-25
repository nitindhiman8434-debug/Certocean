import { IconType } from "react-icons";
import { FaAws, FaMicrosoft } from "react-icons/fa6";
import {
  SiIsc2,
  SiComptia,
  SiGooglecloud,
  SiScrumalliance,
  SiInformatica,
  SiSelenium,
  SiLinux,
  SiSalesforce,
  SiDotnet,
  SiR,
  SiCisco,
} from "react-icons/si";
import { ShieldCheck, Briefcase, BarChart3, FlaskConical, TestTube2 } from "lucide-react";
import { Course } from "@/data/types";

export interface TechIconSpec {
  Icon: IconType | typeof ShieldCheck;
  label: string;
}

/** Maps a course to the brand/technology icon that best represents its certifying body or subject. */
export function getCourseTechIcon(course: Course): TechIconSpec {
  const haystack = `${course.certificationBody ?? ""} ${course.title}`.toLowerCase();

  if (haystack.includes("isc2") || haystack.includes("cissp")) return { Icon: SiIsc2, label: "ISC2" };
  if (haystack.includes("comptia")) return { Icon: SiComptia, label: "CompTIA" };
  if (haystack.includes("aws") || haystack.includes("amazon")) return { Icon: FaAws, label: "AWS" };
  if (haystack.includes("azure") || haystack.includes(".net") || haystack.includes("microsoft")) {
    if (haystack.includes(".net")) return { Icon: SiDotnet, label: ".NET" };
    return { Icon: FaMicrosoft, label: "Microsoft Azure" };
  }
  if (haystack.includes("google cloud") || haystack.includes("gcp")) return { Icon: SiGooglecloud, label: "Google Cloud" };
  if (haystack.includes("cisco")) return { Icon: SiCisco, label: "Cisco" };
  if (haystack.includes("scrum")) return { Icon: SiScrumalliance, label: "Scrum Alliance" };
  if (haystack.includes("informatica")) return { Icon: SiInformatica, label: "Informatica" };
  if (haystack.includes("selenium")) return { Icon: SiSelenium, label: "Selenium" };
  if (haystack.includes("linux")) return { Icon: SiLinux, label: "Linux" };
  if (haystack.includes("salesforce")) return { Icon: SiSalesforce, label: "Salesforce" };
  if (haystack.includes("using r") || haystack.includes(" r ")) return { Icon: SiR, label: "R" };
  if (haystack.includes("pmi") || haystack.includes("pmp") || haystack.includes("capm")) {
    return { Icon: Briefcase, label: "PMI" };
  }
  if (haystack.includes("isaca") || haystack.includes("cisa") || haystack.includes("crisc") || haystack.includes("cism")) {
    return { Icon: ShieldCheck, label: "ISACA" };
  }
  if (haystack.includes("ec-council") || haystack.includes("ceh") || haystack.includes("chfi") || haystack.includes("cciso")) {
    return { Icon: ShieldCheck, label: "EC-Council" };
  }
  if (haystack.includes("tableau")) return { Icon: BarChart3, label: "Tableau" };
  if (haystack.includes("sas")) return { Icon: BarChart3, label: "SAS" };
  if (haystack.includes("testcomplete")) return { Icon: TestTube2, label: "TestComplete" };
  if (haystack.includes("testing")) return { Icon: FlaskConical, label: "Software Testing" };

  return { Icon: ShieldCheck, label: "Certification" };
}
