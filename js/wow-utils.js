'use strict';

var wow = {};
wow.achievements = {};
wow.crunch = {
	ranks: [
		{
			rank: 3,
			rating: 1750,
			title: 'Lobster'
		},
		{
			rank: 2,
			rating: 2000,
			title: 'Manta Ray'
		},
		{
			rank: 1,
			rating: 2200,
			title: 'Killer Whale'
		}
	]
};

wow.utils = {
	getHighestArenaRank : function (bracket, character) {
		console.log('Achievements completed: ' + character.achievements.achievementsCompleted.length);
		var highest = null;
		var index = -1;
		for (var i = 0; i < wow.achievements.arena[bracket].length; i++) {
			index = $.inArray(wow.achievements.arena[bracket][i].id, character.achievements.achievementsCompleted);
			console.log('achievs: ' + wow.achievements.arena[bracket][i].id + ' | ' + index + ' | ' + wow.achievements.arena[bracket].length);
			if (index === -1) { continue; }
			if (highest == null || highest.rank < wow.achievements.arena[bracket][i].rank) {
				highest = wow.achievements.arena[bracket][i];
				console.log('higher rank found: ' + bracket + ': ' + highest.rank + ' | ' + highest.title);
			}
		}
		return highest;
	}
};

wow.achievements.arena = {
	'2v2' : [
		{
			size: '2v2',
			rank: 1,
			id: 399,
			title: 'Just the Two of Us: 1550',
			points: 10,
			description: 'Earn a 1550 personal rating in the 2v2 bracket of the arena.'
		},
		{
			size: '2v2',
			rank: 2,
			id: 400,
			title: 'Just the Two of Us: 1750',
			points: 10,
			description: 'Earn a 1750 personal rating in the 2v2 bracket of the arena.'
		},
		{
			size: '2v2',
			rank: 3,
			id: 401,
			title: 'Just the Two of Us: 2000',
			points: 10,
			description: 'Earn a 2000 personal rating in the 2v2 bracket of the arena.'
		},
		{
			size: '2v2',
			rank: 4,
			id: 1159,
			title: 'Just the Two of Us: 2200',
			points: 10,
			description: 'Earn a 2200 personal rating in the 2v2 bracket of the arena.'
		}
	],
	'3v3': [
		{
			size: '3v3',
			rank: 1,
			id: 402,
			title: 'Three\'s Company: 1550',
			points: 10,
			description: 'Earn a 1550 personal rating in the 3v3 bracket of the arena.'
		},
		{
			size: '3v3',
			rank: 2,
			id: 403,
			title: 'Three\'s Company: 1750',
			points: 10,
			description: 'Earn a 1750 personal rating in the 3v3 bracket of the arena.'
		},
		{
			size: '3v3',
			rank: 3,
			id: 405,
			title: 'Three\'s Company: 2000',
			points: 10,
			description: 'Earn a 2000 personal rating in the 3v3 bracket of the arena.'
		},
		{
			size: '3v3',
			rank: 4,
			id: 1160,
			title: 'Three\'s Company: 2200',
			points: 10,
			description: 'Earn a 2200 personal rating in the 3v3 bracket of the arena.'
		},
		{
			size: '3v3',
			rank: 5,
			id: 5266,
			title: 'Three\'s Company: 2400',
			points: 10,
			description: 'Earn a 2400 personal rating in the 3v3 bracket of the arena.'
		},
		{
			size: '3v3',
			rank: 6,
			id: 5267,
			title: 'Three\'s Company: 2700',
			points: 10,
			description: 'Earn a 2700 personal rating in the 3v3 bracket of the arena.'
		}
	],
	'5v5': [
		{
			size: '5v5',
			rank: 1,
			id: 406,
			title: 'High Five: 1550',
			points: 10,
			description: 'Earn a 1550 personal rating in the 5v5 bracket of the arena.'
		},
		{
			size: '5v5',
			rank: 2,
			id: 407,
			title: 'High Five: 1750',
			points: 10,
			description: 'Earn a 1750 personal rating in the 5v5 bracket of the arena.'
		},
		{
			size: '5v5',
			rank: 3,
			id: 404,
			title: 'High Five: 2000',
			points: 10,
			description: 'Earn a 2000 personal rating in the 5v5 bracket of the arena.'
		},
		{
			size: '5v5',
			rank: 4,
			id: 1161,
			title: 'High Five: 2200',
			points: 10,
			description: 'Earn a 2200 personal rating in the 5v5 bracket of the arena.'
		}
	],
	titles: [
		{
			id: 2090,
			rank: 1,
			title: 'Challenger',
			points: 10,
			description: 'Earn the Challenger title in an arena season.'
		},
		{
			id: 2093,
			rank: 2,
			title: 'Rival',
			points: 10,
			description: 'Earn the Rival title in an arena season.'
		},
		{
			id: 2092,
			rank: 3,
			title: 'Duelist',
			points: 10,
			description: 'Earn the Duelist title in an arena season.'
		},
		{
			id: 2091,
			rank: 4,
			title: 'Gladiator',
			points: 10,
			description: 'Earn the Gladiator title in an arena season.',
			reward: 'Rewards: Custom Gladiator mount and Master Riding'
		}
	]
};