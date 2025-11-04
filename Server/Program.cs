using AdminDashTemplate.Server;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using AdminDashTemplate.Server.Data;

var builder = WebApplication.CreateBuilder(args);

// Remove CORS or simplify it for local development
builder.Services.AddCors(options =>
{
    options.AddPolicy("BlazorClientPolicy",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
builder.Services.AddHttpClient();
builder.Services.AddDbContext<AVRContext>(options =>
    options.UseSqlServer("Server=tcp:avrservice.database.windows.net,1433;Initial Catalog=BlazorStore;Persist Security Info=False;User ID=rob;Password=Rocket000!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseWebAssemblyDebugging();
}
else
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseBlazorFrameworkFiles();
app.UseStaticFiles();

app.UseRouting();
app.UseCors("BlazorClientPolicy");

// Map endpoints BEFORE fallback
app.MapRazorPages();
app.MapControllers();

// Fallback MUST be last
app.MapFallbackToFile("index.html");



app.Run();