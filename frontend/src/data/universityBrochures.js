const brochure = (label, course, filename) => ({
  label,
  course,
  url: `/Brochure/${filename}`,
});

export const UNIVERSITY_BROCHURES = {
  "amity-university-online": [
    brochure("BBA", "BBA", "1 Amity University BBA.pdf"),
    brochure("MBA", "MBA", "1 Amity University MBA.pdf"),
    brochure("MCA", "MCA", "1 Amity University MCA.pdf"),
  ],
  "manipal-university-online": [
    brochure("All programs", "All programs", "3 Manipal University All.pdf"),
  ],
  "chandigarh-university-online": [
    brochure("BBA", "BBA", "6 Chandigarh University BBA.pdf"),
    brochure("BCA", "BCA", "6 Chandigarh University BCA.pdf"),
    brochure("MBA", "MBA", "6 Chandigarh University MBA.pdf"),
    brochure("MCA", "MCA", "6 Chandigarh University MCA.pdf"),
  ],
  "lovely-professional-university-online": [
    brochure("BCA", "BCA", "2 LPU BCA.pdf"),
    brochure("MBA", "MBA", "2 LPU MBA.pdf"),
    brochure("MCA", "MCA", "2 LPU MCA.pdf"),
  ],
  "jain-university-online": [
    brochure("All programs", "All programs", "7 JAIN University All.pdf"),
  ],
  "nmims-online": [
    brochure("MBA", "MBA", "5 NMIMS University MBA.pdf"),
  ],
  "dy-patil-university-online": [
    brochure("All programs", "All programs", "8 DY Patil University All.pdf"),
    brochure("MCA", "MCA", "8 DY Patil University MCA.pdf"),
  ],
  "sharda-university-online": [
    brochure("All programs", "All programs", "15 Sharda University All.pdf"),
  ],
  "uttaranchal-university-online": [
    brochure("BBA", "BBA", "17 Uttaranchal University BBA.pdf"),
    brochure("BCA", "BCA", "17 Uttaranchal University BCA.pdf"),
    brochure("MBA", "MBA", "17 Uttaranchal University MBA.pdf"),
    brochure("MCA", "MCA", "17 Uttaranchal University MCA.pdf"),
  ],
  "upes-online": [
    brochure("MBA + BBA (combined)", "MBA and BBA", "14 UPES MBA+BBA.pdf"),
  ],
  "kurukshetra-university-online": [
    brochure("BA", "BA", "26 Kurukshetra University BA.pdf"),
  ],
  "vivekananda-global-university-online": [
    brochure(
      "University brochure",
      "University information",
      "31 Vivekananda Global University.pdf",
    ),
  ],
  "sikkim-manipal-university-online": [
    brochure("BBA", "BBA", "9 Sikkim Manipal University BBA.pdf"),
    brochure("MBA", "MBA", "9 Sikkim Manipal University MBA.pdf"),
    brochure("MCA", "MCA", "9 Sikkim Manipal University MCA.pdf"),
  ],
  "parul-university-online": [
    brochure("All programs", "All programs", "30 Parul University All.pdf"),
  ],
  "gla-university-online": [
    brochure("BBA", "BBA", "18 GLA University BBA.pdf"),
    brochure("BCA", "BCA", "18 GLA University BCA.pdf"),
    brochure("MBA", "MBA", "18 GLA University MBA.pdf"),
    brochure("MCA", "MCA", "18 GLA University MCA.pdf"),
  ],
  "galgotias-university-online": [
    brochure("BBA", "BBA", "32 Galgotias University BBA.pdf"),
    brochure("MBA", "MBA", "32 Galgotias University MBA.pdf"),
    brochure("MCA", "MCA", "32 Galgotias University MCA.pdf"),
  ],
  "andhra-university-online": [
    brochure(
      "University brochure",
      "University information",
      "23 Andhra University.pdf",
    ),
  ],
  "jamia-hamdard-online": [
    brochure("All programs", "All programs", "27 Jamia Hamdard All.pdf"),
  ],
  "bharathidasan-university-online": [
    brochure(
      "University brochure",
      "University information",
      "21 Bharathidasan University.pdf",
    ),
  ],
  "vit-university": [
    brochure("MBA", "MBA", "10 Vellore Institute of Technology MBA.pdf"),
    brochure("MCA", "MCA", "10 Vellore Institute of Technology MCA.pdf"),
  ],
  "srm-university": [
    brochure("All programs", "All programs", "11 SRM University All.pdf"),
  ],
  "amrita-vishwa-vidyapeetham": [
    brochure(
      "MBA",
      "MBA",
      "12 Amrita Vishwa Vidyapeetham- MBA.pdf",
    ),
  ],
  ignou: [
    brochure("All programs", "All programs", "13 IGNOU - ALL.pdf"),
  ],
  "bharati-vidyapeeth": [
    brochure(
      "University brochure",
      "University information",
      "16 Bharati Vidyapeeth.pdf",
    ),
  ],
  "vignans-foundation": [
    brochure(
      "University brochure",
      "University information",
      "19 Vignan's Foundation for Science, Technology and Research.pdf",
    ),
  ],
  "mizoram-university": [
    brochure("All programs", "All programs", "22 Mizoram University All.pdf"),
  ],
  "guru-ghasidas-university": [
    brochure(
      "University brochure",
      "University information",
      "24 Guru Ghasidas Vishwavidyalaya (GGU).pdf",
    ),
  ],
};

export function getUniversityBrochures(universityId) {
  return UNIVERSITY_BROCHURES[universityId] || [];
}
