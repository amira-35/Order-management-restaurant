/*! 21.0.3.0 */
/*! VersionVI: 01F250052j x */
function WDTableNavColonne(){arguments.length&&WDTableColonne.prototype.constructor.apply(this,arguments)}function WDTableNavigateur(n,t,i,r,u){if(arguments.length){WDTableZRNavigateur.prototype.constructor.apply(this,arguments);var e=u[3],f=u[4],o=u[5],s=f.splice(3,1)[0];this.m_oStyleCacheLargeur=new WDStyleCache(!0);this.m_oStyleCacheLargeur.Creation();this.m_oStyleCacheLargeur.CreationFin();this.m_tabStyle=e;this.m_oPopupSaisieTRF=new WDPopupSaisieTRF(this,f);this.m_oAffichageColonnes=new WDAffichageColonnes(this,s,this.m_oStyleCacheLargeur);this.m_oCelluleSaisie=new WDCelluleSaisie(this);this.m_bHauteurLigneVariable=o}}var WDTableRupture=WDRupture,WDTableAttribut,WDTableLigne;WDTableNavColonne.prototype=new WDTableColonne;WDTableNavColonne.prototype.constructor=WDTableNavColonne;WDTableNavColonne.prototype.nCherche=function(n,t,i){return clWDUtil.nDansTableauFct(this.m_tabOptions,clWDUtil.fGetCompare(t?clWDUtil.nRechercheIdentique:clWDUtil.nRechercheCommencePar),n,i)};WDTableNavColonne.prototype.nGetOccurrence=function(){return this.m_tabOptions.length};WDTableNavColonne.prototype.Insere=function(n,t){t<this.nGetOccurrence()?this.m_tabOptions.splice(t,0,n):this.m_tabOptions.push(n)};WDTableNavColonne.prototype.Modifie=function(n,t){this.m_tabOptions[t]=n};WDTableNavColonne.prototype.Supprime=function(n){this.m_tabOptions.splice(n,1)};WDTableNavColonne.prototype.SupprimeTout=function(){delete this.m_tabOptions};WDTableNavColonne.prototype.nGetPositionC=function(n){var t=this.nGetOccurrence();return undefined===n||n<1||t<n?t:n-1};WDTableNavColonne.prototype.xnGetPositionC=function(n){var t=this.nGetOccurrence();if(undefined===n||n<1||t<n)throw new WDErreur(301,n,1,t);else return n-1};WDTableAttribut=WDAttribut;WDTableLigne=WDLigne;WDTableNavigateur.prototype=new WDTableZRNavigateur;WDTableNavigateur.prototype.constructor=WDTableNavigateur;WDTableNavigateur.prototype.ms_nTicAffichage=0;WDTableNavigateur.prototype.ms_nTicCreation=0;WDTableNavigateur.prototype.Init=function(){if(WDTableZRNavigateur.prototype.Init.apply(this,arguments),this.m_oPopupSaisieTRF.AjouteLienImages(this.m_tabColonnes),this.m_oAffichageColonnes.Init(this.m_tabColonnes),this.m_oTitrePosPixel){var n=this;this.m_oHote.parentNode.onscroll=function(){n.__SynchroniseTitreScroll()}}};WDTableNavigateur.prototype._vOnResize=function(){WDTableZRNavigateur.prototype._vOnResize.apply(this,arguments);this.__SynchroniseTitre()};WDTableNavigateur.prototype._vLiaisonHTML=function(n,t){WDTableZRNavigateur.prototype._vLiaisonHTML.apply(this,[n,t]);this.m_oTitrePosPixel=this.oGetIDElement(clWDTableDefs.ID_TITRE,clWDTableDefs.ID_POSITION_PIXEL)};WDTableNavigateur.prototype._vNewColonne=WDTableNavColonne;WDTableNavigateur.prototype._vNewAttributAutomatique=WDTableAttribut;WDTableNavigateur.prototype._vNewRupture=WDTableRupture;WDTableNavigateur.prototype._vLigne=WDTableLigne;WDTableNavigateur.prototype._vPreAffiche=function(n){n.m_bCelluleSaisie=this.m_oCelluleSaisie.bDetacheFormulaire();WDTableZRNavigateur.prototype._vPreAffiche.apply(this,[n])};WDTableNavigateur.prototype._vPostAffiche=function(n){WDTableZRNavigateur.prototype._vPostAffiche.apply(this,[n]);this.__BranchePCodesColonnes();this.__SynchroniseTitre();this.m_oCelluleSaisie.AttacheFormulaire(n.m_bCelluleSaisie)};WDTableNavigateur.prototype._vHTMLGenereLigne=function(n,t,i,r){var u=this.m_oElementsHTML.tbody.contenu[0];this.__HTMLGenereLigne(n,t,i,u,r)};WDTableNavigateur.prototype._vTableAfficheTitres=function(){if(this.m_oTitrePosPixel){for(var t=[],i=this.m_oElementsHTML.thead.contenu,r=i.length,n=0;n<r;n++)this.__HTMLGenereLigne(0,1,null,i[n],t);this.m_oPopupSaisieTRF.SupprimeLienImages(this.m_tabColonnes.length);this.m_oAffichageColonnes.LibereTitres();this._HTMLAffiche(this.m_oTitrePosPixel,t);this.m_oAffichageColonnes.InitTitres();this.m_oPopupSaisieTRF.AjouteLienImages(this.m_tabColonnes);clWDUtil.m_oNotificationsAjoutHTML.LanceNotifications(this,this.m_oTitrePosPixel)}};WDTableNavigateur.prototype._vInvalidePourTRF=function(n,t){undefined!==n?this.m_oPopupSaisieTRF.AfficheImageTri(n,t):this.m_oPopupSaisieTRF.AjouteLienImages(this.m_tabColonnes,!0)};WDTableNavigateur.prototype._voHTMLParse=function(n){var t=clWDUtil.oEvalJSON(n);return this.__oHTMLParseElement(t)};WDTableNavigateur.prototype._vbAvecCouleurDeFondSelection=clWDUtil.m_pfVide;WDTableNavigateur.prototype._vnGetColSpanRupture=function(){var n=0,t=!1;return clWDUtil.bForEach(this.m_tabColonnes,function(i){return i.m_bVisible&&(n++,i.m_bAjustable?(n++,t=!0):t=!1),!0}),t&&n--,n};WDTableNavigateur.prototype.__BranchePCodesColonnes=function(){clWDUtil.bForEachThis(this.m_tabColonnes,this,function(n){switch(n.m_eTypeIDObjet){case WDChamp.prototype.ms_nIDObjetInterrupteur:this.__BranchePCodesColonneInterrupteur(n);break;case WDChamp.prototype.ms_nIDObjetImage:this.__BranchePCodesColonneImage(n)}return!0})};WDTableNavigateur.prototype.__BranchePCodesColonneInterrupteur=function(n){this.__BrancheUnPCodeUneColonne(n,this.ms_nEventNavBlur,"blur","input");this.__BrancheUnPCodeUneColonne(n,this.ms_nEventNavChange,"change","input");this.__BrancheUnPCodeUneColonne(n,this.ms_nEventNavFocus,"focus","input")};WDTableNavigateur.prototype.__BranchePCodesColonneImage=function(n){this.__BrancheUnPCodeUneColonne(n,this.ms_nEventNavClick,"click","img");this.__BrancheUnPCodeUneColonne(n,this.ms_nEventNavLoad,"load","img")};WDTableNavigateur.prototype.__BrancheUnPCodeUneColonne=function(n,t,i,r){var f=clWDUtil.pfGetTraitementDirect(n.m_sAlias,t),u,e,o,s;if(f)for(u=1,o=n.m_nRangCreation;e=this.oGetIDElement(u,o);)s=e.getElementsByTagName(r),this.__BrancheUnPCodeUnElement(s[0],i,f,this._nLigneWLLigne(u)),u++};WDTableNavigateur.prototype.__BrancheUnPCodeUnElement=function(n,t,i,r){var u=this;n["on"+t]=function(n){return u.__oAppelPCodeSurLigne(r,i,n||event)}};WDTableNavigateur.prototype.__SynchroniseTitre=function(){if(this.m_oTitrePosPixel){var t=this.m_oHote.parentNode,i=this.m_oTitrePosPixel.parentNode,n=this._nGetLargeurAscenseurVertical(t);i.parentNode.style.paddingRight=n<=0?"":n+"px";this.__SynchroniseTitreScroll()}};WDTableNavigateur.prototype.__SynchroniseTitreScroll=function(){this.m_oTitrePosPixel.parentNode.scrollLeft=this.m_oHote.parentNode.scrollLeft};WDTableNavigateur.prototype.__HTMLGenereLigne=function(n,t,i,r,u){var e;if(this.__HTMLGenere(n,t,i,r.debut,u),i.bGetDeroule())for(var o=this.m_oAffichageColonnes.m_tabPositionAffichage,s=r.contenu,h=o.length,f=0;f<h;f++)e=o[f].m_oColonne,e.m_bVisible&&this.__HTMLGenere(n,t,i,s[e.m_nRangCreation],u);this.__HTMLGenere(n,t,i,r.fin,u)};WDTableNavigateur.prototype.__oHTMLParseElement=function(n){return n instanceof Array?this.__oHTMLParseTableau(n):"string"==typeof n?this.__oHTMLParseChaine(n):n instanceof Object?this.__oHTMLParseObjet(n):{}};WDTableNavigateur.prototype.__oHTMLParseTableau=function(n){for(var i=[],r=n.length,t=0;t<r;t++)i.push(this.__oHTMLParseElement(n[t]));return i};WDTableNavigateur.prototype.__oHTMLParseChaine=WDTableZRNavigateur.prototype.__tabHTMLParse;WDTableNavigateur.prototype.__oHTMLParseObjet=function(n){var i={};for(var t in n)n.hasOwnProperty(t)&&(i[t]=this.__oHTMLParseElement(n[t]));return i};WDTableNavigateur.prototype._xoGetColonneComboSelonAlias=function(n,t){return t&&this._TableAffiche(),this._xoGetColonneSelonAlias(n)};WDTableNavigateur.prototype.bDerniereColonneVisible=function(n){return this.m_oAffichageColonnes.bDerniereColonneVisible(this._oGetColonne(n).m_nPositionAffichage)};WDTableNavigateur.prototype.OnClickInterrupteur=function(n,t,i,r){var u=t.checked;this.SetValeurCellule(i,r,u,u)};WDTableNavigateur.prototype.OnRedimCol=function(n,t,i){this.m_oAffichageColonnes.bOnMouseDown(n,t,i)};WDTableNavigateur.prototype.OnSelectLigne=function(n,t,i,r){this.m_oSelection.OnSelectLigne(this._nLigneWLLigne(n,undefined,undefined,undefined,!0),t,i,r)};WDTableNavigateur.prototype.OnTriColonne=function(n){var t=!0,i=clWDUtil.nDansTableauFct(this.m_tabTri,this.__s_bCompareRTFParColonne,n);clWDUtil.nElementInconnu!=i&&(t=!this.m_tabTri[i].m_bCroissant);this._TriSurUneColonne(n,t)};WDTableNavigateur.prototype.OnRecherche=function(n,t,i){var u=this._bDesactiveFiltreUneColonne(t),r;this._Refiltre(u,!1);this._TriSurUneColonne(t,!0);r=this.__nLigneCherche([t],i,clWDUtil.nRechercheCommencePar,0);this.ms_nLigneInvalide!=r&&this.m_oSelection.ReinitSelection(r);this._TableAfficheLigne(0,r)};WDTableNavigateur.prototype.OnFiltre=function(n,t,i,r){this._ActiveFiltre(t,i,r)};WDTableNavigateur.prototype.OnAnnuleFiltre=function(n,t){var i=this._bDesactiveFiltreUneColonne(t);this._Refiltre(i,!0)};WDTableNavigateur.prototype.eColonneTypeIDObjet=function(n){return this.m_tabColonnes[n].m_eTypeIDObjet};WDTableNavigateur.prototype.bColonneSaisissable=function(n){return this.m_tabColonnes[n].bGetSaisissable()};WDTableNavigateur.prototype.sGetValeurCellule=function(n,t){return this._oGetProprieteColonneAvecIndice(t,n,n,this.XML_CHAMP_PROP_NUM_VALEUR,!0)};WDTableNavigateur.prototype.nGetValeurCellule=function(n,t){var i=this._oGetProprieteColonneAvecIndice(t,n,n,this.XML_CHAMP_PROP_NUM_VALEUR);switch(typeof i){case"number":return i-1;default:return this.m_tabColonnes[t].nCherche(i,!0,0)}};WDTableNavigateur.prototype.SetValeurCellule=function(n,t,i,r){switch(this.eColonneTypeIDObjet(t)){case WDChamp.prototype.ms_nIDObjetCombo:switch(typeof this.m_tabLignes[n].tabGetValeurs()[t]){case"number":this.m_tabLignes[n].tabGetValeurs()[t]=r+1;return}default:this.m_tabLignes[n].tabGetValeurs()[t]=i}};WDTableNavigateur.prototype.tabContenuCellule=function(n,t){return this.m_tabColonnes[t].m_tabOptions};WDTableNavigateur.prototype.oGetIDCelluleRel=function(n,t){return this.oGetIDElement(this._nLigneLigneWL(n),t)};WDTableNavigateur.prototype.ChangeOrdreColonne=function(n){if(n){var t=new WDPositionColonnes(null);t.vSauve(this.m_tabColonnes);WDPosition.prototype.s_Ajoute(t,this.m_sAliasChamp)}this._TableAffiche(clWDTableDefs.ms_nOptionTAPreserveScroll+clWDTableDefs.ms_nOptionTARedessineTitre)};WDTableNavigateur.prototype.SetColonnePositionAffichage=function(n){var i=n.length,t;if(i==this.m_tabColonnes.length&&clWDUtil.bForEach(n,function(n){return 0<=n&&n<i})){for(this.m_oAffichageColonnes.LibereTitres(),t=0;t<i;t++)this.m_tabColonnes[t].m_nPositionAffichage=n[t];this.m_oAffichageColonnes.Init(this.m_tabColonnes);this.ChangeOrdreColonne(!1)}};WDTableNavigateur.prototype.DeplaceColonne=function(n,t){var r=this._xoGetColonneSelonAlias(n),i=this._nGetNbColonnes();if(t<1||i<t)throw new WDErreur(301,t,1,i);this.m_oAffichageColonnes.DeplaceColonne(r,t-1)};WDTableNavigateur.prototype.IndiceColonne=function(n,t){var i=this._xnGetColonneSelonAlias(n);undefined===t&&(t=this.ms_nTicCreation);switch(t){case this.ms_nTicAffichage:return this.m_tabColonnes[i].m_nPositionAffichage+1;default:case this.ms_nTicCreation:return i+1}};WDTableNavigateur.prototype.SaisieEnCours=function(){return this.m_oPopupSaisieTRF.bSaisieEnCours()||this.m_oCelluleSaisie.bSaisieEnCours()};WDTableNavigateur.prototype.SaisieLoupe=function(n,t,i){var r=this._xnGetColonneSelonAlias(n);undefined===t&&(t=0);undefined===i&&(i="");this.m_oPopupSaisieTRF.OnSaisieLoupe(null,r,t,i)};WDTableNavigateur.prototype.ChercheDansColonne=function(n,t,i,r){var f,u;return i=undefined===i?!0:!!i,f=undefined===r?0:parseInt(r,10)-1,u=this._xoGetColonneComboSelonAlias(n,!1).nCherche(t,i,f),this.ms_nLigneInvalide!=u?u+1:u};WDTableNavigateur.prototype.OccurrenceDansColonne=function(n){return this._xoGetColonneComboSelonAlias(n,!1).nGetOccurrence()};WDTableNavigateur.prototype.AjouteDansColonne=function(n,t){this.InsereDansColonne(n,t)};WDTableNavigateur.prototype.InsereDansColonne=function(n,t,i){var r=this._xoGetColonneComboSelonAlias(n,!0);r.Insere(t,r.nGetPositionC(i))};WDTableNavigateur.prototype.ModifieDansColonne=function(n,t,i){var r=this._xoGetColonneComboSelonAlias(n,!0);r.Modifie(t,r.xnGetPositionC(i))};WDTableNavigateur.prototype.SupprimeDansColonne=function(n,t){var i=this._xoGetColonneComboSelonAlias(n,!0);i.Supprime(i.xnGetPositionC(t))};WDTableNavigateur.prototype.SupprimeToutDansColonne=function(n){this._xoGetColonneComboSelonAlias(n,!0).SupprimeTout()}