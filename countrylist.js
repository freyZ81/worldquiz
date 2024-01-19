// Array mit Fragen und Antworten
let quiz = [];

const countries = [
    {
      country: ["Germany"],
      capital: ["Berlin"],
      continent: ["Europe"],
      //timezone: ["+2"],
      notes: "",
      count: 0
    },
    {
      country: ["Netherlands"],
      capital: ["Amsterdam"],
      continent: ["Europe"],
      notes: "",
      count: 0
    },
    {
      country: ["Luxembourg"],
      capital: ["Luxembourg"],
      continent: ["Europe"],
      notes: "",
      count: 0
    },
    {
      country: ["Belgium"],
      capital: ["Brussels"],
      continent: ["Europe"],
      notes: "",
      count: 0
    },
    {
      country: ["France"],
      capital: ["Paris"],
      continent: ["Europe"],
      notes: "",
      count: 0
    },
    {
      country: ["Andorra"],
      capital: ["Andorra la Vella", "AndorraLaVella"],
      continent: ["Europe"],
      //timezone: ["+2"],
      notes: "",
      count: 0
    },
    {
      country: ["Spain"],
      capital: ["Madrid"],
      continent: ["Europe"],
      notes: "",
      count: 0
    },
    {
      country: ["Portugal"],
      capital: ["Lisbon"],
      continent: ["Europe"],
      notes: "",
      count: 0
    },
    {
      country: ["Italy"],
      capital: ["Rome"],
      continent: ["Europe"],
      notes: "",
      count: 0
    },
    {
      country: ["Vatican"],
      capital: ["Vatican City", "VaticanCity"],
      continent: ["Europe"],
      //timezone: ["+2"],
      notes: "",
      count: 0
    },
    {
      country: ["San Marino", "SanMarino"],
      capital: ["San Marino City", "SanMarinoCity"],
      continent: ["Europe"],
      //timezone: ["+2"],
      notes: "",
      count: 0
    },
    {
      country: ["Malta"],
      capital: ["Valletta"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Cyprus"],
      capital: ["Nicosia"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["United Kingdom", "UK", "UnitedKingdom"],
      capital: ["London"],
      continent: ["Europe"],
      //timezone: ["+2"],
      notes: "",
      count: 0
    },
    {
      country: ["Ireland"],
      capital: ["Dublin"],
      continent: ["Europe"],
      //timezone: ["+2"],
      notes: "",
      count: 0
    },
    {
      country: ["Iceland"],
      capital: ["Reykjavík", "Reykjavik"],
      continent: ["Europe"],
      //timezone: ["+2"],
      notes: "",
      count: 0
    },
    {
      country: ["Denmark"],
      capital: ["Copenhagen"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Norway"],
      capital: ["Oslo"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Sweden"],
      capital: ["Stockholm"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Finland"],
      capital: ["Helsinki"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Estonia"],
      capital: ["Tallinn"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Latvia"],
      capital: ["Riga"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Lithuania"],
      capital: ["Vilnius"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Russia"],
      capital: ["Moscow"],
      continent: ["Europe", "Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Belarus"],
      capital: ["Minsk"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Moldova"],
      capital: ["Chisinau"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Ukraine"],
      capital: ["Kiew"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Romania"],
      capital: ["Bucharest"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Bulgaria"],
      capital: ["Sofia"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Türkiye", "Turkey", "Turkiye"],
      capital: ["Ankara"],
      continent: ["Europe", "Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Poland"],
      capital: ["Warsaw"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Czechia", "CzechRepublic", "Czech Republic", "Czechia"],
      capital: ["Prague"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Slovakia"],
      capital: ["Bratislava"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Hungary"],
      capital: ["Budapest"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Slovenia"],
      capital: ["Ljubljana"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Switzerland"],
      capital: ["Bern"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Liechtenstein"],
      capital: ["Vaduz"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Austria"],
      capital: ["Vienna"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Bosnia and Herzegovina", "BosniaAndHerzegovina", "bih"],
      capital: ["Sarajevo"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Croatia"],
      capital: ["Zagreb"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Albania"],
      capital: ["Tirana"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Serbia"],
      capital: ["Belgrade"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Kosovo"],
      capital: ["Pristina"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["North Macedonia", "Macedonia", "NorthMacedonia"],
      capital: ["Skopje"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Montenegro"],
      capital: ["Podgorica"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Greece"],
      capital: ["Athens"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Monaco"],
      capital: ["Monaco City", "MonacoCity"],
      continent: ["Europe"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    
    {
      country: ["New Zealand", "NewZealand"],
      capital: ["Wellington"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Australia"],
      capital: ["Canberra"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Fiji"],
      capital: ["Suva"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Kiribati"],
      capital: ["South Tarawa", "SouthTawara"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Marshall Islands", "MarshallIslands"],
      capital: ["Majuro"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Micronesia"],
      capital: ["Majuro"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Nauru"],
      capital: ["Yaren"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Palau"],
      capital: ["Ngerulmud"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Papua New Guinea", "PNG", "PapuaNewGuinea"],
      capital: ["Port Moresby", "PortMoresby"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Samoa"],
      capital: ["Apia"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Solomon Islands", "SolomonIslands"],
      capital: ["Honiara"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Tonga"],
      capital: ["Nuku'alofa", "NukuAlofa"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Tuvalu"],
      capital: ["Funafuti"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Vanuatu"],
      capital: ["Port Vila", "Port Vila"],
      continent: ["Oceania"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    
    {
      country: ["Argentina"],
      capital: ["Buenos Aires", "BuenosAires"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Bolivia"],
      capital: ["La Paz and Sucre", "LaPazAndSucre", "La Paz Sucre", "LaPazSucre", "La Paz", "LaPaz", "Sucre"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Brazil"],
      capital: ["Brasília", "Brasilia"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Chile"],
      capital: ["Santiago"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Colombia"],
      capital: ["Bogóta", "Bogota"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Ecuador"],
      capital: ["Quito"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Guyana"],
      capital: ["Georgetown"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Paraguay"],
      capital: ["Asunción", "Asuncion"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Peru"],
      capital: ["Lima"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Suriname"],
      capital: ["Paramaribo"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Uruguay"],
      capital: ["Montevideo"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Venezuela"],
      capital: ["Caracas"],
      continent: ["South America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    
    {
      country: ["Antigua and Barbuda", "AntiguaBarbuda", "AntiguaAndBarbuda"],
      capital: ["Saint John's", "Saint John's", "SaintJohn's", "SaintJohns", "St. Johns", "St. John's", "St.Johns", "St.John's", "StJonhs", "StJohn's"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Bahamas"],
      capital: ["Nassau"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Barbados"],
      capital: ["Bridgetown"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Belize"],
      capital: ["Belmopan"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Canada"],
      capital: ["Ottawa"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Costa Rica", "CostaRica"],
      capital: ["San José", "SanJosé", "San Jose", "SanJose"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Cuba"],
      capital: ["Havana"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Dominica"],
      capital: ["Roseau"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Dominican Republic", "DominicanRepublic"],
      capital: ["Santo Domingo", "SantoDomingo"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["El Salvador", "ElSalvador"],
      capital: ["San Salvador", "SanSalvador"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Grenada"],
      capital: ["St. George's", "St.George's", "St. Georges", "St.George's", "St Georges", "St George's", "StGeorges"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Guatemala"],
      capital: ["Guatemala City", "GuatemalaCity"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Haiti"],
      capital: ["Port-au-Prince", "Port-auPrince", "PortAu-Prince", "PortAuPrince"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Honduras"],
      capital: ["Tegucigalpa"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Jamaica"],
      capital: ["Kingston"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Mexico"],
      capital: ["Mexico City", "MexicoCity"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Nicaragua"],
      capital: ["Managua"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Panama"],
      capital: ["Panama City"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Saint Kitts and Nevis", "St. Kitts and Nevis", "St Kitts and Nevis", "St.KittsAndNevis", "StKittsAndNevis"],
      capital: ["Basseterre"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Saint Lucia", "St. Lucia", "St.Lucia", "StLucia", "SaintLucia"],
      capital: ["Castries"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Saint Vincent and the Grenadines", "St. Vincent and the Grenadines", "St Vincent and the Grenadines", "StVincentAndTheGrenadines", "St.VincentAndTheGrenadines", "SaintVincentAndTheGrenadis"],
      capital: ["Kingstown"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Trinidad and Tobago", "TrinidadAnd Tobago", "Trinidad andTobago", "TrinidadAndTobago"],
      capital: ["Port of Spain", "PortOf Spain", "Port ofSpain", "PortOfSpain"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["United States of America", "UnitedStatesOfAmerica", "United States", "UnitedStates", "USA"],
      capital: ["Washington, D.C", "WashingtonDC", "Washington,DC", "Washington,D.C", "WashingtonD.C"],
      continent: ["North America"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    
    {
      country: ["Afghanistan"],
      capital: ["Kabul"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Armenia"],
      capital: ["Yerevan"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Azerbaijan"],
      capital: ["Baku"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Bahrain"],
      capital: ["Manama"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Bangladesh"],
      capital: ["Dhaka"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Bhutan"],
      capital: ["Thimphu"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Brunei"],
      capital: ["Bandar Seri Begawan", "Bandar SeriBegawan", "BandarSeri Begawan", "BandarSeriBegawan"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Cambodia"],
      capital: ["Phnom Penh", "PhnomPenh"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["China"],
      capital: ["Beijing"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Timor-Leste", "Timor Leste", "TimorLeste"],
      capital: ["Dili"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Georgia"],
      capital: ["Tbilisi"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["India"],
      capital: ["New Delhi", "NewDelhi"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Indonesia"],
      capital: ["Jakarta"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Iran"],
      capital: ["Tehran"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Iraq"],
      capital: ["Baghdad"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Israel"],
      capital: ["Jerusalem"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Japan"],
      capital: ["Tokyo"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Jordan"],
      capital: ["Amman"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Kazakhstan"],
      capital: ["Nur-Sultan",  "NurSultan"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Kuwait"],
      capital: ["Kuwait City", "KuwaitCity"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Kyrgyzstan"],
      capital: ["Bishkek"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Laos"],
      capital: ["Vientiane"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Lebanon"],
      capital: ["Beirut"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Malaysia"],
      capital: ["Kuala Lumpur", "KualaLumpur"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Maldives"],
      capital: ["Malé", "Male"],
      continent: ["Asia"],
      //timezone: ["+5"],
      notes: "",
      count: 0
    },
    {
      country: ["Mongolia"],
      capital: ["Ulaanbaatar"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Myanmar"],
      capital: ["Naypyidaw"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Nepal"],
      capital: ["Kathmandu"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["North Korea", "NorthKorea"],
      capital: ["Pyingyang"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Oman"],
      capital: ["Muscat"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Pakistan"],
      capital: ["Islamabad"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Palestine"],
      capital: ["Jerusalem"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Philippines"],
      capital: ["Manila"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Qatar"],
      capital: ["Doha"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Saudi Arabia", "SaudiArabia"],
      capital: ["Riyadh"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Singapore"],
      capital: ["Singapore"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["South Korea", "SK", "SouthKorea"],
      capital: ["Seoul"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Sri Lanka", "SriLanka"],
      capital: ["Sri Jayawardenepura Kotte and Colombo", "SriJayawardenepura Kotte", "Sri JayawardenepuraKotte", "Colombo", "SriJayawardenepuraKotteAndColombo", "SriJayawardenepuraKotte"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Syria"],
      capital: ["Damascus"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Taiwan"],
      capital: ["Taipei"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Tajikistan"],
      capital: ["Dushanbe"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Thailand"],
      capital: ["Bangkok"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Turkmenistan"],
      capital: ["Ashgabat"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["United Arab Emirates", "UnitedArab Emirates", "United ArabEmirates", "UAE"],
      capital: ["Abu Dhabi", "AbuDhabi"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Uzbekistan"],
      capital: ["Tashkent"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Vietnam"],
      capital: ["Hanoi"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Yemen"],
      capital: ["Sana'a", "Sanaa"],
      continent: ["Asia"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    
    {
      country: ["Algeria"],
      capital: ["Algiers"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Angola"],
      capital: ["Luanda"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Benin"],
      capital: ["Porto-Novo", "PortoNovo"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Botswana"],
      capital: ["Gaborone"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Burkina Faso", "BurkinaFaso"],
      capital: ["Ouagadougou"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Burundi"],
      capital: ["Gitega", "Bujumbura"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Cabo Verde", "CaboVerde"],
      capital: ["Praia"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Cameroon"],
      capital: ["Yaoundé", "Yaounde"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Central African Republic", "CAR", "CentralAfrican Republic", "Central AfricanRepublic", "CentralAfricanRepublic"],
      capital: ["Bangui"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Chad"],
      capital: ["N'Djamera", "NDjamera"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Comoros"],
      capital: ["Moroni"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Democratic Republic of the Congo", "Democratic Republic of Congo", "DRC", "DemocraticRepublicOfCongo",  "DemRepOfCongo"],
      capital: ["Kinshasa"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Djibouti"],
      capital: ["Djibouti"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Egypt"],
      capital: ["Cairo"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Equatorial Guinea", "EquatorialGuinea"],
      capital: ["Malabo"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Eritrea"],
      capital: ["Asmara"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Eswatini"],
      capital: ["Mbabane and Lobamba", "MbabaneAnd Lobamba", "Mbabane andLobamba", "Mbabane", "Lobamba"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Ethiopia"],
      capital: ["Addis Ababa", "AddisAbaba"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Gabon"],
      capital: ["Libreville"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Gambia"],
      capital: ["Banjul"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Ghana"],
      capital: ["Accra"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Guinea"],
      capital: ["Conakry"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Guinea-Bissau", "GuineaBissau"],
      capital: ["Bissau"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Ivory Coast", "IvoryCoast"],
      capital: ["Yamoussoukro and Abidjan", "YamoussoukroAnd Abidjan", "Yamoussoukro AndAbidjan", "Yamoussoukro", "Abidjan", "YamoussoukroAndAbidjan"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Kenya"],
      capital: ["Nairobi"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Lesotho"],
      capital: ["Maseru"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Liberia"],
      capital: ["Monrovia"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Libya"],
      capital: ["Tripoli"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Madagascar"],
      capital: ["Antanarivo"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Malawi"],
      capital: ["Lilongwe"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Mali"],
      capital: ["Bamako"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Mauritania"],
      capital: ["Nouakchott"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Mauritius"],
      capital: ["Port Louis", "PortLouis"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Morocco"],
      capital: ["Rabat"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Mozambique"],
      capital: ["Maputo"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Namibia"],
      capital: ["Windhoek"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Niger"],
      capital: ["Niamey"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Nigeria"],
      capital: ["Abuja"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Republic of the Congo", "RepublicOfCongo", "Republic of Congo", "RepublicOfTheCongo"],
      capital: ["Brazzaville"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Rwanda"],
      capital: ["Kigali"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Sao Tome and Principe", "SaoTome and Principe", "SaoTomeAndPrincipe"],
      capital: ["Sao Tome", "SaoTome"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Senegal"],
      capital: ["Dakar"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Seychelles"],
      capital: ["Victoria"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Sierra Leone", "SierraLeone"],
      capital: ["Freetown"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Somalia"],
      capital: ["Mogadishu"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["South Africa", "SouthAfrica"],
      capital: ["Pretoria, Bloemfontein and Cape Town", "Pretoria", "Bloemfontein", "Cape Town", "CapeTown", "PretoriaBloemfonteinCapeTown", "PretoriaBloemfonteinAndCapeTown"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["South Sudan", "SouthSudan"],
      capital: ["Juba"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Sudan"],
      capital: ["Khartoum"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Tanzania"],
      capital: ["Dodoma"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Togo"],
      capital: ["Lome"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Tunisia"],
      capital: ["Tunis"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Uganda"],
      capital: ["Kampala"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Zambia"],
      capital: ["Lusaka"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    {
      country: ["Zimbabwe"],
      capital: ["Harare"],
      continent: ["Africa"],
      //timezone: [""],
      notes: "",
      count: 0
    },
    // Weitere Fragen hinzufügen
];

let selectedCountries = [];
selectedCountries = JSON.parse(localStorage.getItem('selectedCountriesArray'));
if (selectedCountries === null) {
  selectedCountries = ["Europe"];
}
const checkBoxEurope = document.getElementById("checkEurope");
const checkBoxAsia = document.getElementById("checkAsia");
const checkBoxOceania = document.getElementById("checkOceania");
const checkBoxAfrica = document.getElementById("checkAfrica");
const checkBoxNorthAmerica = document.getElementById("checkNorthAmerica");
const checkBoxSouthAmerica = document.getElementById("checkSouthAmerica");

function setCountries() {
  quiz = [];
  selectedCountries = [];
  let oneChecked = false;

  if (checkBoxEurope.checked && checkBoxAsia.checked) {
    selectedCountries.push("Asia")
    selectedCountries.push("Europe")
    addCountriesEuropeAndAsia();
    oneChecked = true;
  } else {
    if (checkBoxEurope.checked) {
      addCountries("Europe");
      selectedCountries.push("Europe")
      oneChecked = true;
    }
    if (checkBoxAsia.checked) {
      selectedCountries.push("Asia")
      addCountries("Asia");
      oneChecked = true;
    }
  }
  if (checkBoxOceania.checked) {
    selectedCountries.push("Oceania")
    addCountries("Oceania");
    oneChecked = true;
  }
  if (checkBoxAfrica.checked) {
    selectedCountries.push("Africa")
    addCountries("Africa");
    oneChecked = true;
  }
  if (checkBoxNorthAmerica.checked) {
    selectedCountries.push("North America")
    addCountries("North America");
    oneChecked = true;
  }
  if (checkBoxSouthAmerica.checked) {
    selectedCountries.push("South America")
    addCountries("South America");
    oneChecked = true;
  }

  if (!oneChecked) {
    alert("Es muss mindestens ein Kontinent ausgewählt sein!")
  }

  localStorage.setItem('quizArray', JSON.stringify(quiz));
  localStorage.setItem('selectedCountriesArray', JSON.stringify(selectedCountries));

  //alert("Setzen erfolgreich")
}

function addCountries(continent) {
  for (let i = 0; i < countries.length; i++) {
    let allContinents = countries[i].continent.map(continent => continent.toLowerCase());
    if (allContinents.includes(continent.toLowerCase())) {
      quiz.push(countries[i]);
    }
  }
}

function addCountriesEuropeAndAsia() {
  for (let i = 0; i < countries.length; i++) {
    let allContinents = countries[i].continent.map(continent => continent.toLowerCase());
    if (allContinents.includes("Europe".toLowerCase()) || allContinents.includes("Asia".toLowerCase())) {
      quiz.push(countries[i]);
    }
  }
}

function getSelectedCountries() {
  selectedCountries = JSON.parse(localStorage.getItem('selectedCountriesArray'));
  if (selectedCountries === null) {
    selectedCountries = [];
  }
  if (checkBoxEurope.checked) {
    selectedCountries.push("Europe")
  }
  if (checkBoxAsia.checked) {
    selectedCountries.push("Asia")
  }
  if (checkBoxOceania.checked) {
    selectedCountries.push("Oceania")
  }
  if (checkBoxAfrica.checked) {
    selectedCountries.push("Africa")
  }
  if (checkBoxNorthAmerica.checked) {
    selectedCountries.push("North America")
  }
  if (checkBoxSouthAmerica.checked) {
    selectedCountries.push("South America")
  }
  localStorage.setItem('selectedCountriesArray', JSON.stringify(selectedCountries));
}

function selectSelectedCountries() {
  selectedCountries = JSON.parse(localStorage.getItem('selectedCountriesArray'));
  
  checkBoxAfrica.checked = false;
  checkBoxAsia.checked = false;
  checkBoxEurope.checked = false;
  checkBoxNorthAmerica.checked = false;
  checkBoxOceania.checked = false;
  checkBoxSouthAmerica.checked = false;
  if (selectedCountries === null) {
    getSelectedCountries();
  }
  if (selectedCountries.length === 0) {
    selectedCountries = ["Europe"];
  }
  if (selectedCountries.includes("Europe")) {
    checkBoxEurope.checked = true;
  }
  if (selectedCountries.includes("Asia")) {
    checkBoxAsia.checked = true;
  }
  if (selectedCountries.includes("Oceania")) {
    checkBoxOceania.checked = true;
  }
  if (selectedCountries.includes("Africa")) {
    checkBoxAfrica.checked = true;
  }
  if (selectedCountries.includes("North America")) {
    checkBoxNorthAmerica.checked = true;
  }
  if (selectedCountries.includes("South America")) {
    checkBoxSouthAmerica.checked = true;
  }
}

function getIndex(list, question) {
  let i;
  let found = false;
  for (i = 0; i < list.length; i++) {
      let allCountries = list[i].country.map(country => country.toLowerCase());
      let allCapital = list[i].capital.map(capital => capital.toLowerCase());

      if (allCountries.includes(question.toLowerCase())
          || allCapital.includes(question.toLowerCase())) {
              found = true;
              break;        
          }
  }
  return i;
}

function getCountryIndex(list, question) {
  let i;
  let found = false;
  for (i = 0; i < list.length; i++) {
      let allCountries = list[i].country.map(country => country.toLowerCase());
      
      if (allCountries.includes(question.toLowerCase())) {
              found = true;
              break;        
          }
  }
  return i;
}

function getCapitalIndex(list, question) {
  let i;
  let found = false;
  for (i = 0; i < list.length; i++) {
      let allCapital = list[i].capital.map(capital => capital.toLowerCase());

      if (allCapital.includes(question.toLowerCase())) {
              found = true;
              break;        
          }
  }
  return i;
}

function getCountryOrCapital(list, index, question) {
  let type;

  let allCountries = list[index].country.map(country => country.toLowerCase());
  let allCapital = list[index].capital.map(capital => capital.toLowerCase());

  if (allCountries.includes(question.toLowerCase())) {
    type = "country";
  }
  if (allCapital.includes(question.toLowerCase())) {
    type = "capital";
  }
}

function countCountries(list, searchedContinent) {
  let i;
  let count = 0;
  for (i = 0; i < list.length; i++) {
    let allContinents = list[i].continent.map(continent => continent.toLowerCase());
    if (allContinents.includes(searchedContinent.toLowerCase())) {
      count += 1;
    }
  }
  return count;
}

function countAllCountries(list) {
  countCountries(list, "Europe");
  countCountries(list, "Asia");
  countCountries(list, "Africa");
  countCountries(list, "Oceania");
  countCountries(list, "North America");
  countCountries(list, "South America");
}