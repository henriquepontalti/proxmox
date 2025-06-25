                    me.updateLoginData(data);

// Disable subscription popups
if (Proxmox.Utils && Proxmox.Utils.checked_command) {
    Proxmox.Utils.checked_command = function(orig_cmd) {
        orig_cmd();
    };
}
