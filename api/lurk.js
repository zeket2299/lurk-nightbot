export default function handler(req, res) {
  const { user } = req.query;

  const responses = [
    "is lurking… probably judging silently.",
    "just hit !lurk like they hit shots: occasionally.",
    "activated stealth mode — snacks equipped.",
    "is watching from the shadows… like a supportive ghost.",
    "vanished into lurk mode — maybe brb, maybe Netflix.",
    "is lurking. Definitely not rage-quitting.",
    "entered silent mode… batteries not included.",
    "is now in spectator mode — no backseating.",
    "is lurking with snacks and questionable focus.",
    "slipped into the void… still vibing though.",
    "pressed !lurk and walked into the fog of war.",
    "just ninja vanished — respect the stealth.",
    "is lurking harder than a bush camper.",
    "hit !lurk and probably fell asleep instantly.",
    "went AFK with good intentions.",
    "is now spectating — morale support incoming.",
    "toggled lurk mode like it’s a power-up.",
    "vanished like a solo teammate with no mic.",
    "is lurking. Chat safety level: moderate.",
    "is ghosting (respectfully).",
    "is lurking… or just forgot to close the tab.",
    "is watching with popcorn and passive judgment.",
    "is low-key multitasking. Emphasis on low-key.",
    "dropped into lurk — mission: chill & watch.",
    "went full stealth. May return with snacks.",
    "is here but quiet — the ultimate support move.",
    "is now operating in ghost protocol.",
    "entered background mode. May still laugh at chat.",
    "is lurking with a high ping and chill energy.",
    "joined team Lurk. Perk unlocked: invisibility."
  ];

  const random = responses[Math.floor(Math.random() * responses.length)];
  res.status(200).send(`${user} ${random}`);
}
