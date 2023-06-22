﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class BasketEntityAdded1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BaseketItem_Baskets_BasketId",
                table: "BaseketItem");

            migrationBuilder.DropForeignKey(
                name: "FK_BaseketItem_Products_ProductId",
                table: "BaseketItem");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BaseketItem",
                table: "BaseketItem");

            migrationBuilder.RenameTable(
                name: "BaseketItem",
                newName: "BasketItems");

            migrationBuilder.RenameIndex(
                name: "IX_BaseketItem_ProductId",
                table: "BasketItems",
                newName: "IX_BasketItems_ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_BaseketItem_BasketId",
                table: "BasketItems",
                newName: "IX_BasketItems_BasketId");

            migrationBuilder.AlterColumn<int>(
                name: "BasketId",
                table: "BasketItems",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_BasketItems",
                table: "BasketItems",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_Baskets_BasketId",
                table: "BasketItems",
                column: "BasketId",
                principalTable: "Baskets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_Products_ProductId",
                table: "BasketItems",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_Baskets_BasketId",
                table: "BasketItems");

            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_Products_ProductId",
                table: "BasketItems");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BasketItems",
                table: "BasketItems");

            migrationBuilder.RenameTable(
                name: "BasketItems",
                newName: "BaseketItem");

            migrationBuilder.RenameIndex(
                name: "IX_BasketItems_ProductId",
                table: "BaseketItem",
                newName: "IX_BaseketItem_ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_BasketItems_BasketId",
                table: "BaseketItem",
                newName: "IX_BaseketItem_BasketId");

            migrationBuilder.AlterColumn<int>(
                name: "BasketId",
                table: "BaseketItem",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BaseketItem",
                table: "BaseketItem",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BaseketItem_Baskets_BasketId",
                table: "BaseketItem",
                column: "BasketId",
                principalTable: "Baskets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BaseketItem_Products_ProductId",
                table: "BaseketItem",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
