using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.EntityFrameworkCore;
using AdminDashTemplate.Server.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

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
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseBlazorFrameworkFiles();
app.UseStaticFiles();

app.UseRouting();

app.MapRazorPages();
app.MapControllers();


app.MapFallbackToFile("index.html");

app.Run();
