// Procedures globales du projet
function PROCNAV_STLien()
{
	this.Lien="";
	this.Libelle="";
};
PROCNAV_STLien.prototype=new WDTypeAvance();
PROCNAV_STLien.prototype.constructor=PROCNAV_STLien;
function PROCNAV_STIndex()
{
	this.MotCle="";
	this.TabIndiceLien=clWDTableau.tabCreeTableau([0],0,function(){return clWDUtil.oConversionType(arguments[0],8,0,50,0);},undefined,false);
};
PROCNAV_STIndex.prototype=new WDTypeAvance();
PROCNAV_STIndex.prototype.constructor=PROCNAV_STIndex;
function PROCNAV_STInfoFullText()
{
	this.IndiceLien=0;
	this.Poids=0;
	this.TabPositions=clWDTableau.tabCreeTableau([0],0,function(){return clWDUtil.oConversionType(arguments[0],8,0,50,0);},undefined,false);
};
PROCNAV_STInfoFullText.prototype=new WDTypeAvance();
PROCNAV_STInfoFullText.prototype.constructor=PROCNAV_STInfoFullText;
function PROCNAV_STInfoMotResultat()
{
	this.sMot="";
	this.nNbOccurrence=0;
};
PROCNAV_STInfoMotResultat.prototype=new WDTypeAvance();
PROCNAV_STInfoMotResultat.prototype.constructor=PROCNAV_STInfoMotResultat;
function PROCNAV_STResultat()
{
	this.nIndiceLien=0;
	this.nPoids=0;
	this.HashMot=new WDTableauAssociatif(0,"",19);
};
PROCNAV_STResultat.prototype=new WDTypeAvance();
PROCNAV_STResultat.prototype.constructor=PROCNAV_STResultat;
function PROCNAV_STIndex()
{
	this.MotCle="";
	this.TabIndiceLien=clWDTableau.tabCreeTableau([0],0,function(){return clWDUtil.oConversionType(arguments[0],8,0,50,0);},undefined,false);
};
PROCNAV_STIndex.prototype=new WDTypeAvance();
PROCNAV_STIndex.prototype.constructor=PROCNAV_STIndex;
function PROCNAV_STLien()
{
	this.Lien="";
	this.Libelle="";
};
PROCNAV_STLien.prototype=new WDTypeAvance();
PROCNAV_STLien.prototype.constructor=PROCNAV_STLien;
function PROCNAV_LOD(event)
{
	try
	{
		clWDUtil.Try();
		{
			PROCNAV_gTabIndex=clWDTableau.tabCreeTableau([0],PROCNAV_STIndex,function(){return arguments[0];},undefined,false);
			PROCNAV_gTabLien=clWDTableau.tabCreeTableau([0],PROCNAV_STLien,function(){return arguments[0];},undefined,false);
			PROCNAV_gIndexFullText={};
			PROCNAV_gsRecherche="";
			PROCNAV_gstInfoIndex={};
		}
	}
	catch(_E)
	{
		clWDUtil.xbCatchThrow(_E,event);return;
	}
	finally
	{
		!clWDUtil||clWDUtil.oFinally();
	}
}
	function PROCNAV_INITINDEX()
{
	try
	{
		clWDUtil.Try();
		{
			if(window.AIDE.TabIndex.length)
			{
				clWDTableau.Affectation(PROCNAV_gTabIndex,window.AIDE.TabIndex);
			}
		}
	}
	catch(_E)
	{
		clWDUtil.xbCatchThrow(_E);return;
	}
	finally
	{
		!clWDUtil||clWDUtil.oFinally();
	}
}
	function PROCNAV_INITINDEXFULLTEXT()
{
	try
	{
		clWDUtil.Try();
		{
			PROCNAV_gIndexFullText=window.AIDE.TabMots;
		}
	}
	catch(_E)
	{
		clWDUtil.xbCatchThrow(_E);return;
	}
	finally
	{
		!clWDUtil||clWDUtil.oFinally();
	}
}
	function PROCNAV_INITINFOINDEX()
{
	try
	{
		clWDUtil.Try();
		{
			PROCNAV_gstInfoIndex=window.AIDE.InfoIndex;
		}
	}
	catch(_E)
	{
		clWDUtil.xbCatchThrow(_E);return;
	}
	finally
	{
		!clWDUtil||clWDUtil.oFinally();
	}
}
	function PROCNAV_INITLIEN()
{
	try
	{
		clWDUtil.Try();
		{
			clWDTableau.Affectation(PROCNAV_gTabLien,window.AIDE.TabLiens);
		}
	}
	catch(_E)
	{
		clWDUtil.xbCatchThrow(_E);return;
	}
	finally
	{
		!clWDUtil||clWDUtil.oFinally();
	}
}
	