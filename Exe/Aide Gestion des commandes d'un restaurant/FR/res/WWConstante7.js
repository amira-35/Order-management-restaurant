// WWConstante7.js
/*! 21.0.1.0 */
/*! VersionVI: 01F250052j x */
// Le seul support technique disponible pour cette librairie est accessible a travers le service "Assistance Directe".

// Days of the week
var STD_LUNDI = "Lunes";
var STD_MARDI = "Martes";
var STD_MERCREDI = "Mi\xE9rcoles";
var STD_JEUDI = "Jueves";
var STD_VENDREDI = "Viernes";
var STD_SAMEDI = "S\xE1bado";
var STD_DIMANCHE = "Domingo";

// Month of the year
var STD_JANVIER = "Enero";
var STD_FEVRIER = "Febrero";
var STD_MARS = "Marzo";
var STD_AVRIL = "Abril";
var STD_MAI = "Mayo";
var STD_JUIN = "Junio";
var STD_JUILLET = "Julio";
var STD_AOUT = "Augosto";
var STD_SEPTEMBRE = "Septiembre";
var STD_OCTOBRE = "Octubre";
var STD_NOVEMBRE = "Noviembre";
var STD_DECEMBRE = "Diciembre";

// Constants for the popup menu of tables/loopers
// Export
var TABLE_EXPORT =
{
	EXCEL: { sLibelle: "Exportar a Excel...", sTitre: "Exportar el contenido a Excel..." },
	WORD: { sLibelle: "Exportar a Word...", sTitre: "Exportar el contenido a Word..." },
	XML: { sLibelle: "Exportar a XML...", sTitre: "Exportar el contenido a XML..." },
	PDF: { sLibelle: "Imprimir en PDF...", sTitre: "Imprimir en un archivo PDF..." }
};
// Find/Filter
var TABLE_FILTRE =
{
	RECHERCHE: { sLibelle: "Find" },
	FILTRE: { sLibelle: "Filters:" },
	FILTRE_EGAL: { sLibelle: "Is equal to" },
	FILTRE_COMMENCE: { sLibelle: "Starts with" },
	FILTRE_CONTIENT: { sLibelle: "Contains" },
	FILTRE_TERMINE: { sLibelle: "Ends with" },
//	FILTRE_VIDE: { sLibelle: "Is empty" },
	FILTRE_DIFFERENT: { sLibelle: "Is different from" },
	FILTRE_COMMENCE_PAS: { sLibelle: "Does not start with" },
	FILTRE_CONTIENT_PAS: { sLibelle: "Does not contain" },
	FILTRE_TERMINE_PAS: { sLibelle: "Does not end with" },
	FILTRE_SUPERIEUR: { sLibelle: "Greater than" },
	FILTRE_SUPERIEUR_EGAL: { sLibelle: "Greater than or equal to" },
	FILTRE_INFERIEUR: { sLibelle: "Less than" },
	FILTRE_INFERIEUR_EGAL: { sLibelle: "Less than or equal to" },
	FILTRE_SUPPRIME: { sLibelle: "Delete the filter" }
};

// Constants for the popup menu of dashboards
var TDB_MENU =
{
	EDITION: { sLibelle: "Edit mode" },
	CONFINIT: { sLibelle: "Restore the initial configuration" }
};

// Error messages of debug
var STD_ERREUR_MESSAGE			= "Error durante la ejecuci\xF3n del c\xF3digo en el navegador\nError ";
var STD_ERREUR_CHAMP_FOCUS		= "SetFocus: campo desconocido";
var STD_ERREUR_NUM_CHAMP_FOCUS	= "1004";
var STD_ERREUR_CHAMP_OBLIGATOIRE1 = "'";
var STD_ERREUR_CHAMP_OBLIGATOIRE2 = "' campo requerido";
var STD_TITRE_TRACE				= "Rastreo del c\xF3digo de WebDev en el navegador";
var STD_INFO_TRACE				= "Ctrl+P le permite imprimir el c\xF3digo de rastreo";
var STD_ERREUR_MESSAGE_UPLOAD	= "El upload ha fallado.\nUn error inesperado ocurri\xF3 al subir un archivo.\nAseg\xFArese de que los archivos que desea subir no sean demasiado grandes.";
var STD_ERREUR_MESSAGE_VIDEO	= "Ha sido imposible mostrar el fichero de video: %1\n- Verifique si el fichero existe en el servidor\n- Verifique si el Servidor Web autoriza la consultaci\xF3n de este tipo de fichero (filtrado por tipo MIME)";

// Tooltips and messages of the toolbar for the chart controls
var CHART_TOOLBAR =
{
	// Tooltips of the buttons in the bar
	ALTTEXT:
	{
		PIE: "Gr\xE1fico circular...",
		COL: "Gr\xE1fico de barras...",
		CUR: "Gr\xE1fico de l\xEDneas...",
		STO: "Gr\xE1fico de cotizaciones...",
		SAV: "Guardar como...",
		PRI: "Imprimir...",
		LEG: "Leyenda...",
		GDH: "L\xEDneas de cuadr\xEDcula horizontales",
		GDV: "L\xEDneas de cuadr\xEDcula verticales",
		SMO: "Suavizado",
		GRA: "Pendiente",
		RAI: "Estilo 3D",
		ANT: "Anti-aliasing",
		TRA: "Transparencia",
		MIR: "Objetivo",
		ANI: "Animaci&#xF3;n",
		INT: "Interactividad"
	},

	// Caption of the menu for the legend
	LEG:
	{
		0: "Ninguno",
		1: "Derecha",
		2: "Izquierda",
		3: "Parte superior",
		4: "Parte inferior"
	},

	// Text of the menus for the types
	// Pie charts
	PIE:
	{
		0: "C\xEDrculo",
		1: "Semi-c\xEDrculo",
		2: "Anillo",
		3: "Embudo"
	},
	// Bar charts
	COL:
	{
		0: "Gr\xE1fico de barra agrupada",
		1: "Gr\xE1fico de barra apilada",
		2: "Gr\xE1fico de barra agrupada horizontal",
		3: "Gr\xE1fico de barra apilada vertical",
		4: "Waterfall"
	},
	// Line charts
	CUR:
	{
		0: "L\xEDnea",
		1: "Dispersi\xF3n",
		2: "\xC1rea",
		3: "Radar",
		4: "Burbujas",
		5 : "Heatmap"
	},
	// Stock charts
	STO:
	{
		0: "Candela",
		1: "Gr\xE1ficos de barra",
		2: "MinMax"
	},
	// Tooltip
	MIR :
	{
		0 : "Objetivo m&#xFA;ltiple",
		1 : "Objetivo",
		2 : "Tooltip"
	},
	// Parameters
	PARAMS : "Par&#225;metros"
};

// Tooltips and messages in the toolbar of the rich HTML edit control
var HTML_TOOLBAR =
{
	// Tooltips of the buttons in the bar
	ALTTEXT:
	{
		GRA: "Negrita",
		ITA: "It\xE1lica",
		SOU: "Subraya",
		BAR: "Tachado",
		AGA: "Alineado izquierdo",
		ACE: "Centrado",
		ADR: "Alineado derecho",
		AJU: "Justificado",
		LNU: "Numeraci\xF3n",
		LPU: "Vi\xF1etas",
		RMO: "Disminuir tabulaci\xF3n",
		RPL: "Incrementar tabulaci\xF3n",
		EXP: "Exponente",
		IND: "Sub\xEDndice",
		COL: "Color",
		LNK: "Insertar un link",
		IMG: "Insertar una imagen",
		FNA: "Fuente",
		FSI: "Tama\xF1o de fuente"
	},
	// Couleurs de la palette
	COFP:
	{
		0: "General",
		1: "T\xEDtulo",
		2: "Subt\xEDtulo",
		3: "Nota / Advertencia"
	},
	COLP:
	{
		0: "General",
		1: "T\xEDtulo",
		2: "Subt\xEDtulo",
		3: "Enlace (1)",
		4: "Enlace (1)",
		5: "Nota / Advertencia"
	},
	FHE:
	{
		0: "Normal",
		1: "T\xEDtulo 1",
		2: "T\xEDtulo 2",
		3: "T\xEDtulo 3",
		4: "T\xEDtulo 4",
		5: "T\xEDtulo 5",
		6: "T\xEDtulo 6",
		7: "Preformateado",
		8: "Resaltado"
	}
};

var tabWDErrors =
{
	// Message generiques :
	0: "Unknown error.",
	1: "Error in the browser code:\n",
	// Commun entre plusieurs modules
	// WDLanguage.js
	200: "Incorrect value subscript: access to subscript %1 while %2 value(s) have been found.",
	201: "Element not found in the associative array.",
	202: "The associative array contains %1 element(s) referenced by this key: unable to access element %2.",
	203: "Reading an element of an associative array with duplicates is not allowed with this syntax: several elements can be referenced by the same key.",
	204: "Invalid format.",
	205: "ArrayToString() and ArrayToCSV() can only be used on a one-dimensional or two-dimensional array.",
	206: "ArrayToString() and ArrayToCSV() cannot be used on an array of structures if the structure itself contains an array or a structure.",
	207: "A sorted addition can only be performed on an array previously sorted by a call to the Sort() method or to the ArraySort() method.",
	208: "Le tableau poss\xE8de %1 dimension(s) et vous y acc\xE9dez avec %2 dimension(s).",
	// WDZRNavigateur.js
	300: "Wrong subscript: %1. The control is empty.",
	301: "Wrong subscript: %1. Values must be included between %2 and %3.",
	302: "The <%1> column is unknown.",
	303: "Bad constant value (%1).",
	// WDSQL.js
	400: "The <%1> query does not exist.",
	401: "No current connection.",
	// WDAJAX.js
	500: "Error while sending the query:\n%1",
	// WDUtil.js
	600: "Only structure of same definition can be assigned to structure.",
	601: "Incompatible type.",
	602: "Op\xE9rateur '%1' interdit.",
	603: "Propri\xE9t\xE9 inexistante.",
	604: "Le param\xE8tre n\xb0%1 n'a pas de valeur par d\xE9faut et n'a pas re\xE7u de valeur.",
	605: "L'\xE9l\xE9ment '%1' n'existe pas.",
	606: "Aucun \xE9l\xE9ment courant.",
	607: "Invalid JSON format",
	608: "La s\xE9rialisation JSON ne peut se faire que vers une variable de type cha\xEEne.",
	609: "La d\xE9s\xE9rialisation JSON ne peut se faire que vers une variable de type complexe.",
	610: "Le champ (alias : '%1') ne peut pas \xEAtre manipul\xE9 car il n'est pas pr\xE9sent dans le HTML de la page.\nCe champ est (directement ou indirectement) dans un plan avec chargement diff\xE9r\xE9 qui n'a pas encore \xE9t\xE9 affich\xE9 (et donc charg\xE9).",
	611: "Le champ (alias : '%1') ne peut pas \xEAtre manipul\xE9 car il n'est pas pr\xE9sent dans le HTML de la page.\nCe champ (ou un de ses parents) est invisible et l'option 'G\xE9n\xE9rer le code HTML du champ, m\xEAme s'il est invisible' n'est pas activ\xE9e.",
	// WDRating.js
	700: "Les bornes sont invers\xE9es : la borne sup\xE9rieure (%2) est inf\xE9rieure \xE0 la borne inf\xE9rieure (%1).",
	// WD.js
	// - Sockets
	800: "Les sockets ne sont pas disponible.",
	801: "Vous avez appel\xE9 la fonction SocketConnecte en demandant %1 comme nom pour la socket.\nOr, une socket de ce nom existe d\xE9j\xE0.",
	802: "Vous avez appel\xE9 la fonction SocketEcrit.\nLa socket de nom %1 n'existe pas.",
	803: "Vous avez appel\xE9 la fonction SocketFerme.\nLa socket de nom %1 n'existe pas.",
	804: "Vous avez appel\xE9 la fonction SocketEcrit.\nLa socket de nom %1 n'est pas encore connect\xE9.",
	805: "Vous avez appel\xE9 la fonction SocketEcrit.\nLa socket de nom %1 est ferm\xE9e."
};

//Graphe
// - grFormatBulleBoursier : valeur par defaut
var GRF = {
	BULLE: {
		BOURSIER: "[%CATEGORIE%]\nMin.=[%MIN%]\nMax.=[%MAX%]\Start=[%DEBUT%]\End=[%FIN%]"
	}
};

//Constantes de la STD
var WDSTD_CONST =
{
	//Formats TailleVersChaine
	FORMAT_TAILLE_OCTET: "octet",	//octet
	FORMAT_TAILLE_KO: "Ko",			//Kilo-octet
	FORMAT_TAILLE_MO: "Mo",			//Mega-octet
	FORMAT_TAILLE_GO: "Go",			//Giga-octet
	FORMAT_TAILLE_TO: "To"			//Tera-octet
};