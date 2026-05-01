const fs = require('fs-extra');

module.exports = {
  PREFIX: '+',
  OWNER_NUMBERS: ['919876543210@c.us'],   // ← replace with your number
  COOLDOWN: 15 * 60 * 1000,              // 15 minutes auto sleep
  GOD_MODE_INTERVAL: 30,                 // ms for +Arise
  XSTRM_INTERVAL: 10,                    // ms for +xstrm
  
  // File paths
  SESSION_DIR: './sessions',
  MEDIA_DIR: './media',
  
  // In‑memory stores (will be persisted optionally)
  adminList: new Map(),      // groupId -> Set(adminIds)
  coadminList: new Map(),    // groupId -> Set(coadminIds)
  subList: new Set(),        // userIds
  groupLock: new Map(),      // groupId -> { locked: bool, originalName: string }
  
  // Helper functions
  isOwner(userId) {
    return this.OWNER_NUMBERS.includes(userId);
  },
  
  isGroupAdmin(chat, userId) {
    if (this.isOwner(userId)) return true;
    if (!chat.participants) return false;
    const participant = chat.participants.find(p => p.id._serialized === userId);
    return participant && (participant.isAdmin || participant.isSuperAdmin);
  },
  
  isCoAdmin(groupId, userId) {
    return this.coadminList.get(groupId)?.has(userId) || false;
  }
};
