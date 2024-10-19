// Procedures globales du projet
function PROCEDURESNAVIGATEUR_STMatiere2()
{
	this.Lien="";
	this.Libelle="";
	this.Fils=clWDTableau.tabCreeTableau([0],{},function(){return arguments[0];},undefined,false);
};
PROCEDURESNAVIGATEUR_STMatiere2.prototype=new WDTypeAvance();
PROCEDURESNAVIGATEUR_STMatiere2.prototype.constructor=PROCEDURESNAVIGATEUR_STMatiere2;
function PROCEDURESNAVIGATEUR_STMatiere2()
{
	this.Lien="";
	this.Libelle="";
	this.Fils=clWDTableau.tabCreeTableau([0],{},function(){return arguments[0];},undefined,false);
};
PROCEDURESNAVIGATEUR_STMatiere2.prototype=new WDTypeAvance();
PROCEDURESNAVIGATEUR_STMatiere2.prototype.constructor=PROCEDURESNAVIGATEUR_STMatiere2;
function PROCEDURESNAVIGATEUR_LOD(event)
{
	try
	{
		clWDUtil.Try();
		{
			PROCEDURESNAVIGATEUR_x=clWDTableau.tabCreeTableau([0],PROCEDURESNAVIGATEUR_STMatiere2,function(){return arguments[0];},undefined,false);
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
	