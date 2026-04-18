# Minna Journey — Claude Code Reference

## Critical Rules
- Always merge into main immediately after changes
- Never leave work on a feature branch without merging
- badge T11+ use ROOT path, T1-10 use assets/badges/
- badgePath(id, state): if id >= 11 return root path

## File Paths
- Scene images: story[N]_b[1-4].jpg → ROOT
- Badge T11+: badge_t[N]_stuck/else/good.jpg → ROOT  
- Badge T1-10: assets/badges/badge_t[N]_*.jpg

## Per-Track Checklist (ต้องมีทุก track ห้ามข้าม)
- badgeData[N]: popupName {good/else/stuck}, popupDesc, 
  roomTitle, roomNote
- getReflection: T[N] case
- triggerBadgeAnimation: handle popupName pattern
- hasImg: add N to array
- activeTracks: home card with emoji, title, tagline, cover
- trackIntros[N]: protagonist blurb
- Feedback dropdown: add T[N] option

## Badge Popup Standard
- popup must show: badge name (state-specific), 
  description, Web Share button
- use popupName[badgeState] pattern (not legacy bd.name)

## Summary Page Standard  
- show choices b1-b4 with color tags
- badge click → same popup
- reflection text box: use getReflection(trackId, choices)

## Cork Board
- overflow:hidden on wrapper
- min-height:0 on slot
- max-height:100% on img
