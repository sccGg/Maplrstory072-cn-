function enter(pi) {
	if (pi.canHold(4001198,1) && (pi.getMap().getAllMonstersThreadsafe().size() == 0 || pi.getMap().getMonsterById(9300183) != null) && (pi.getMap().getReactorByName("") == null || pi.getMap().getReactorByName("").getState() == 1)) {
		pi.warp(930000800,0);
		pi.gainDwExp_PQ();
		pi.getPlayer().endPartyQuest(1206);
		pi.gainItem(4001198,1);
	} else {
		pi.playerMessage(5, "Please eliminate the Poison Golem and have room");
	}
}