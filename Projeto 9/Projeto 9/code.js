var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bd5a54ad-fab2-463a-924c-26a486d40d95","f0511461-4da6-4208-8de3-b48e748339aa","3c7ec86c-f374-49ee-bd02-65d6092236c1","4cc9e527-6870-44b4-a146-2a2be0c86c01","8c1295b6-0f63-4d07-9ad4-878113c5c846"],"propsByKey":{"bd5a54ad-fab2-463a-924c-26a486d40d95":{"name":"metro","sourceUrl":"assets/api/v1/animation-library/gamelab/hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz/category_backgrounds/underground.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz/category_backgrounds/underground.png"},"f0511461-4da6-4208-8de3-b48e748339aa":{"name":"hatman","sourceUrl":null,"frameSize":{"x":640,"y":640},"frameCount":1,"looping":true,"frameDelay":12,"version":"0_kWNbK4wr0Y48X8bOhdBJopdCt61C7j","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":640},"rootRelativePath":"assets/f0511461-4da6-4208-8de3-b48e748339aa.png"},"3c7ec86c-f374-49ee-bd02-65d6092236c1":{"name":"balao","sourceUrl":"assets/v3/animations/QwpMJJLPoZBgypu4aTw4_hxVLNBCSVUEk6nBqdh34AU/3c7ec86c-f374-49ee-bd02-65d6092236c1.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"T.17ObqVgJZPZObpUJhlTO4tGLibfNvf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/QwpMJJLPoZBgypu4aTw4_hxVLNBCSVUEk6nBqdh34AU/3c7ec86c-f374-49ee-bd02-65d6092236c1.png"},"4cc9e527-6870-44b4-a146-2a2be0c86c01":{"name":"balinha","sourceUrl":"assets/v3/animations/QwpMJJLPoZBgypu4aTw4_hxVLNBCSVUEk6nBqdh34AU/4cc9e527-6870-44b4-a146-2a2be0c86c01.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"T.YagH0lpafdpFtoRt.jvul1yifgVc9u","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/QwpMJJLPoZBgypu4aTw4_hxVLNBCSVUEk6nBqdh34AU/4cc9e527-6870-44b4-a146-2a2be0c86c01.png"},"8c1295b6-0f63-4d07-9ad4-878113c5c846":{"name":"bala","sourceUrl":"assets/v3/animations/QwpMJJLPoZBgypu4aTw4_hxVLNBCSVUEk6nBqdh34AU/8c1295b6-0f63-4d07-9ad4-878113c5c846.png","frameSize":{"x":318,"y":159},"frameCount":1,"looping":true,"frameDelay":4,"version":"C0InF8ieYvkgr9_z.nTHniV6OQnc.Aqr","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":318,"y":159},"rootRelativePath":"assets/v3/animations/QwpMJJLPoZBgypu4aTw4_hxVLNBCSVUEk6nBqdh34AU/8c1295b6-0f63-4d07-9ad4-878113c5c846.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var backalley = createSprite(200,200);
backalley.setAnimation("metro");
var hatman = createSprite(200,345,50,50);
hatman.shapeColor = "black";
hatman.setAnimation("hatman");
hatman.scale = 0.1;
var bala = createSprite(200,250,10,10);
bala.shapeColor="black";
bala.setAnimation("bala");
bala.scale = 0.2;
bala.setVelocity(-10,0);
var balinha = createSprite(200,150,10,10);
balinha.shapeColor="cyan";
balinha.setAnimation("balinha");
balinha.scale = 0.2;
balinha.setVelocity(10,0);
var balao = createSprite(200,50,10,10);
balao.shapeColor="red";
balao.setAnimation("balao");
balao.scale = 0.2;
balao.setVelocity(-10,0);
var dimdim = createSprite(200,5,200,20);
dimdim.shapeColor="green";
var dinheiros =0;
var mortes =0;
function draw() {
  background("green");
  createEdgeSprites();
  bala.bounceOff(edges);
  balinha.bounceOff(edges);
  balao.bounceOff(edges);
  if(keyDown(UP_ARROW)){
  hatman.y=hatman.y-4;
}

if(keyDown(DOWN_ARROW)){
  hatman.y=hatman.y+4;
}

if(keyDown(LEFT_ARROW)){
  hatman.x=hatman.x-4;
}

if(keyDown(RIGHT_ARROW)){
  hatman.x=hatman.x+4;
}
if(hatman.isTouching(bala)|| hatman.isTouching(balinha)|| hatman.isTouching(balao)){
  playSound("assets/category_explosion/playful_game_explosive_hit.mp3");
  hatman.x=200;
  hatman.y=350;
  mortes = mortes+1;
}
if(hatman.isTouching(dimdim)){
  playSound("assets/category_achievements/lighthearted_bonus_objective_5.mp3");
  hatman.x=200;
  hatman.y=345;
  dinheiros = dinheiros+1;
}
textSize(20);
  fill("green");
  text('Grana: '+dinheiros,320,350);
  

textSize(20);
  fill("red");
  text("Buracos na cabeça: "+mortes,20,350);
  drawSprites();
}
//Historia: Era uma vez um chapeu que podia andar e tinha olhos chamado hatman. Esse chapeu venho de uma raça que é toda feita de seres que parecem chapeus. Um dia, os criminosos famosos chamados de bala, balinha e balao, convidaram hatman para um metro porque eles tinham um bolo. Mesmo isso obviamente ser uma armadilha, hatman foi mesmo assim porque nao era muitp inteligente. Agora, hatman tem que desviar dos ataques dos criminosos e pegar o dinheiro deles!(o que tem nao tem nenhum motivo, mas, é engraçado!)

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
