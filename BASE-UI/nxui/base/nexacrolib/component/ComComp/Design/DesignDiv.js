//==============================================================================
//
//  Copyright 2021 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.com/legal/license/tobesoft/ko/NexacroN-public-license-readme-1.1.html
//
//==============================================================================

if (nexacro.Div) {
	var _pDiv = nexacro.Div.prototype;
	_pDiv.createCssDesignContents = function () {
		this.set_text("Div");
	};
	_pDiv.resetScroll = function () {
		var form = this._p_form;
		if (form) {
			form.resetScroll();
		}
	};
	_pDiv.set_url = function (v) {
		var init = nexacro.Component.prototype.set_initvalueid;
		nexacro.Component.prototype.set_initvalueid = function (initvalueid) {
			if (!this._is_created) {
				this._p_initvalueid = initvalueid;
				var fn = this._type_name + initvalueid;
				if (nexacro_init[fn]) {
					nexacro_init[fn].call(this, this);
				}
			}
		};
		if (this._p_url != v) {
			this._p_url = v;
			this.on_apply_url();
		}
		nexacro.Component.prototype.set_initvalueid = init;
	};
	_pDiv.design_set_fittocontents = function (v) {
		var fittocontents_enum = ["none", "width", "height", "both"];
		if (fittocontents_enum.indexOf(v) == -1) {
			return;
		}
		if (this._design_fittocontents != v) {
			this._design_fittocontents = v;
		}
	};
	_pDiv.design_get_fittocontents = function () {
		return this._design_fittocontents;
	};
	delete _pDiv;
}
if (nexacro._InnerForm) {
	var _pInnerForm = nexacro._InnerForm.prototype;
	_pInnerForm.loadForm = nexacro.FormBase.prototype.loadForm;
	delete _pInnerForm;
}
