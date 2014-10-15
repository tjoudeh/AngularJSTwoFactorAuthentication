using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TwoFactorAuthentication.API
{
    public class AuthContext : IdentityDbContext<ApplicationUser>
    {
        public AuthContext()
            : base("AuthContext")
        {
        }
    }

    public class ApplicationUser : IdentityUser
    {
        [Required]
        [MaxLength(16)]
        public string PSK { get; set; }
    }
}