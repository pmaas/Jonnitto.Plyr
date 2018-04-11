(function () {
    var o={
        i18n:{
            <f:for each="{i18n}" as="key" iteration="iteration">
                {key}:'<f:translate package="Jonnitto.Plyr" id="{key}" />'<f:if condition="{iteration.isLast}"><f:else>,</f:else></f:if>
            </f:for>
        }
        <f:if condition="{options.enabled}"><f:else>,enabled:false</f:else></f:if>
        <f:if condition="{options.debug}">,debug:true</f:if>
        <f:if condition="{controls}">,controls:{controls -> f:format.raw()}</f:if>
        <f:if condition="{settings}">,settings:{settings -> f: format.raw()}</f:if>
        <f:if condition="{options.loadSprite}"><f:else>,loadSprite:false</f:else></f:if>
        <f:if condition="{options.iconUrl}">,iconUrl:'{options.iconUrl}'</f:if>
        <f:if condition="{options.iconPrefix} != 'plyr'">,iconPrefix:'{options.iconPrefix}'</f:if>
        <f:if condition="{options.blankUrl}">,blankUrl:'{options.blankUrl}'</f:if>
        <f:if condition="{options.autoplay}">,autoplay:true</f:if>
        <f:if condition="{options.autopause}"><f:else>,autopause:false</f:else></f:if>
        <f:if condition="{options.seekTime} != 10">,seekTime:{options.seekTime}</f:if>
        <f:if condition="{options.volume} != 1">,volume:{options.volume}</f:if>
        <f:if condition="{options.muted}">,muted:true</f:if>
        <f:if condition="{clickToPlay}"><f:else>,clickToPlay:false</f:else></f:if>
        <f:if condition="{options.disableContextMenu}"><f:else>,disableContextMenu:false</f:else></f:if>
        <f:if condition="{options.hideControls}"><f:else>,hideControls:false</f:else></f:if>
        <f:if condition="{options.showPosterOnEnd}">,showPosterOnEnd:true</f:if>
        <f:if condition="{keyboard}">,keyboard:{keyboard -> f:format.raw()}</f:if>
        <f:if condition="{tooltips}">,tooltips:{tooltips -> f:format.raw()}</f:if>
        <f:if condition="{options.duration}">,duration:{options.duration}</f:if>
        <f:if condition="{options.displayDuration}"><f:else>,displayDuration:false</f:else></f:if>
        <f:if condition="{options.invertTime}"><f:else>,invertTime:false</f:else></f:if>
        <f:if condition="{options.listeners}">,listeners:{options.listeners}</f:if>
        <f:if condition="{captions}">,captions:{captions -> f:format.raw()}</f:if>
        <f:if condition="{fullscreen}">,fullscreen:{fullscreen -> f:format.raw()}</f:if>
        <f:if condition="{options.ratio} != '16:9'">,ratio:'{options.ratio}'</f:if>
        <f:if condition="{storage}">,storage:{storage -> f:format.raw()}</f:if>
        <f:if condition="{speed}">,speed:{speed -> f:format.raw()}</f:if>
        <f:if condition="{quality}">,quality:{quality -> f:format.raw()}</f:if>
        <f:if condition="{options.loop.active}">,loop:{active:true}</f:if>
        <f:if condition="{ads}">,ads:{ads -> f:format.raw()}</f:if>
    };
    window.initPlyrMax = 100;
    window.initPlyr = function (event) {
        if (typeof Plyr == 'function') {
            window.neosPlyr = typeof neosPlyr == 'object' ? neosPlyr : [];
            var s = '.neos-plyr', opt = typeof o == 'object' ? o : {}, doc = document, e;
            if (event && event.detail && event.detail.element) {
                doc = event.detail.element;
            }
            e = doc.querySelectorAll(s);
            for (var i = 0; i < e.length; i++) {
                neosPlyr.push(new Plyr(e[i], opt));
            }
        } else {
            if (initPlyrMax--) {
                setTimeout(function () {
                    initPlyr(event)
                }, 100);
            }
        }
    };

    if (!document.querySelector('.neos-backend')) {
        initPlyr();
    }
})();
